import { GiPerson } from "react-icons/gi";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">Seu Perfil</h2>

      <div className="flex items-center mb-4">
        <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center text-xl font-bold">
          <GiPerson size={35} />
        </div>
        <div className="ml-4">
          <p className="text-primaryColor font-semibold">Usuário 1</p>
          <p className="text-primaryColor text-sm">@Usuario1</p>
        </div>
      </div>

      <Link to="/Profile">
      <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 w-full rounded-2xl hover:bg-red-500 transition">
        Ver Perfil
      </button>
      </Link>

    </div>
  );
};

export default ProfileCard;
