import { FiRefreshCcw } from "react-icons/fi";

const RefreshButton = () => {
    return (
        <div className="flex items-center fixed inset-x-0 bottom-5">
            <button className="w-auto h-auto mx-auto p-3 rounded-full border-2 border-tertiaryColor text-tertiaryColor bg-white text-lg flex items-center justify-center">
                <FiRefreshCcw/>
            </button>
        </div>
     
    );
}

export default RefreshButton;