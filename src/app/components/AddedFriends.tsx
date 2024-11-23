import { GiPerson } from "react-icons/gi";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface FriendList {
  id: string;
  ownerId: number;
  createdAt: string;
  users: User[];
}

const AddedFriends = () => {
  const [friendList, setFriendList] = useState<FriendList | null>(null);
  const [id, setId] = useState(3);
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
    fetch(`https://uni4life-api.vercel.app/friendList/${userUid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setFriendList(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  console.log(friendList);
  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">Seus Amigos</h2>
      {!friendList || !friendList.users || friendList.users.length === 0 ? (
        <p className="text-primaryColor text-center py-4">
          Ainda não tem amigos adicionados, quando fizer eles vão aparecer aqui
        </p>
      ) : (
        <>
          <ul className="space-y-3">
            {friendList.users.slice(0, 3).map((user) => (
              <li key={user.id} className="flex items-center">
                <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                  <GiPerson size={25} />
                </div>
                <p className="ml-4 text-primaryColor font-medium">
                  {user.name}
                </p>
              </li>
            ))}
          </ul>

          <button className="mt-4 bg-secondaryColor text-primaryColor border-t border-primaryColor pt-2 w-full text-center hover:underline">
            Ver mais
          </button>
        </>
      )}
    </div>
  );
};

export default AddedFriends;
