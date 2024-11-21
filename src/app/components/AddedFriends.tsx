import { GiPerson } from "react-icons/gi";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const AddedFriends = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://uni4life-api.vercel.app/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">Seus Amigos</h2>

      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id} className="flex items-center">
            <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
              <GiPerson size={25} />
            </div>
            <p className="ml-4 text-primaryColor font-medium">{user.name}</p>
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-secondaryColor text-primaryColor border-t border-primaryColor pt-2 w-full text-center hover:underline">
        Ver mais
      </button>
    </div>
  );
};

export default AddedFriends;
