import { FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

interface User {
  id: number;
  name: string;
  email: string;
  uid: string;
}

const SuggestedUsersCard = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [userUid, setUserUid] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userUid) {
      fetch(
        `https://uni4life-api.vercel.app/friendList/${userUid}/non-friends`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setSuggestedUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [userUid]);

  const handleConnect = async (friendToAddId: string) => {
    try {
      const response = await fetch(
        "https://uni4life-api.vercel.app/friendList/add-friend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loggedUserId: userUid,
            friendToAddId: friendToAddId,
          }),
        }
      );

      if (response.ok) {
        // Remove the connected user from suggested users list
        setSuggestedUsers(
          suggestedUsers.filter((user) => user.uid !== friendToAddId)
        );
      }
    } catch (error) {
      console.error("Error connecting with user:", error);
    }
  };

  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
      <h2 className="text-teal-600 lg:text-xl 2xl:text-2xl font-bold mb-4">
        Usuários Sugeridos
      </h2>

      <ul className="space-y-2">
        {suggestedUsers.slice(0, 3).map((user) => (
          <li key={user.uid} className="flex items-center justify-around w-full">
            <div className="flex items-center w-1/2">
              <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                <FaUserAlt size={20} />
              </div>
              <p className="ml-4 text-primaryColor font-medium lg:text-xs 2xl:text-base">{user.name}</p>
            </div>

            <button
              onClick={() => handleConnect(user.uid)}
              className="bg-red-400 text-white rounded-2xl hover:bg-red-500 transition font-medium w-2/5 lg:text-xs 2xl:text-base lg:px-2 2xl:px-4 py-2"
            >
              Conectar +
            </button>
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-secondaryColor text-primaryColor border-t border-primaryColor pt-2 w-full text-center hover:underline">
        Ver mais
      </button>
    </div>
  );
};
export default SuggestedUsersCard;


