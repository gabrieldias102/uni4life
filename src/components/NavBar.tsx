import { GiBookCover, GiPerson } from "react-icons/gi";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-primaryColor p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <GiBookCover size={40} color={"#c96868"} />
        <span className="text-secondaryColor font-bold text-xl">Uni4Life</span>
      </div>
      <div>
        <a
          href="#"
          className="text-secondaryColor font-bold text-2xl hover:underline"
        >
          Página Inicial
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-red-50 text-tertiaryColor px-3 py-1 rounded-full shadow focus:outline-none focus:ring focus:ring-red-300"
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-tertiaryColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 4.5a6 6 0 100 12 6 6 0 000-12z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button className="p-1 rounded-full">
            <FaBell color="#ff6e61" size={30} />
          </button>
          <button className="p-1 bg-tertiaryColor rounded-full">
            <GiPerson color="#fff4ea" size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
