import { Link } from "react-router-dom";
import { FaSearch, FaHome, FaUserAlt } from "react-icons/fa";

const MobileFooter = () => {
    return (
        <nav className="flex items-center justify-around bg-primaryColor p-4 shadow-md w-full fixed bottom-0">
            <Link to="/">
                <button className="text-tertiaryColor">
                    <FaHome size={50}/>
                </button>
            </Link>
             
            <Link to="">
                <button className="text-tertiaryColor">
                  <FaSearch size={50}/>
                </button>
            </Link>
          
            <Link to="/Profile">
                <button className="bg-tertiaryColor text-secondaryColor rounded-full p-3">
                    <FaUserAlt size={30}/>
                </button>
            </Link>
        </nav>
    );
}

export default MobileFooter;