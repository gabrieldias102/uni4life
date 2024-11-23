import { GiPerson } from "react-icons/gi";
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

  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">
        Usuários Sugeridos
      </h2>

      <ul className="space-y-2">
        {suggestedUsers.slice(0, 3).map((user) => (
          <li key={user.uid} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                <GiPerson size={25} />
              </div>
              <p className="ml-4 text-primaryColor font-medium">{user.name}</p>
            </div>

            <button className="bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-500 transition font-medium">
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
