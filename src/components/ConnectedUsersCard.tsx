import { GiPerson } from "react-icons/gi";

const ConnectedUsersCard = () => {
  const users = ["Usuário 2", "Usuário 3", "Usuário 4"]; 

  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
  
      <h2 className="text-teal-600 text-2xl font-bold mb-4">
        Usuários Conectados
      </h2>

      <ul className="space-y-3">
        {users.map((user, index) => (
          <li key={index} className="flex items-center">
            <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
              <GiPerson size={25} />
            </div>
            <p className="ml-4 text-primaryColor font-medium">{user}</p>
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-secondaryColor text-primaryColor border-t border-primaryColor pt-2 w-full text-center hover:underline">
        Ver mais
      </button>
    </div>
  );
};

export default ConnectedUsersCard;
