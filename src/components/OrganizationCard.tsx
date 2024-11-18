import { FaBuilding } from "react-icons/fa";

const OrganizationCard = () => {
  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
      <h2 className="text-teal-600 text-xl font-bold mb-4">Sua Organização</h2>

      <div className="flex items-center mb-4">
        <div className="p-4 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
          <FaBuilding size={35} />
        </div>

        <div className="ml-4">
          <p className="text-red-500 font-semibold">Unisinos</p>
          <p className="text-teal-600 text-sm">
            Análise e Desenvolvimento de Sistemas
          </p>
          <p className="text-teal-600 text-sm font-light">Aluno</p>
        </div>
      </div>

      <button className="bg-red-400 text-white px-4 py-2 w-full rounded-2xl hover:bg-red-500 transition font-medium">
        Ver Informações
      </button>
    </div>
  );
};

export default OrganizationCard;
