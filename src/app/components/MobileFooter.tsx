import { Link } from "react-router-dom";
import { FaPlus, FaHome, FaUserAlt } from "react-icons/fa";

const MobileFooter = () => {
    return (
        <nav className="flex items-center justify-around bg-primaryColor p-4 shadow-md w-full xl:hidden fixed bottom-0">
            <Link to="/">
                <button className="bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center p-2 h-12 w-12 border-2 border-secondaryColor">
                    <FaHome size={40}/>
                </button>
            </Link>
             
            <Link to="/Connections">
                <button className="bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center p-2 h-12 w-12 border-2 border-secondaryColor">
                  <FaPlus size={40}/>
                </button>
            </Link>
          
            <Link to="/Profile">
                <button className="bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center p-2 h-12 w-12 border-2 border-secondaryColor">
                    <FaUserAlt size={40}/>
                </button>
            </Link>
        </nav>
    );
}

export default MobileFooter;