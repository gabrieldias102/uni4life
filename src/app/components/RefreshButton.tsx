import { LuRefreshCcw } from "react-icons/lu";

const RefreshButton = () => {
  return (
    <div className="flex items-center">
      <button
        onClick={() => window.location.reload()}
        className="flex gap-3 items-center justify-center mx-auto xl:py-2 xl:px-4 xl:rounded-2xl xl:h-auto xl:w-auto h-16 w-16 p-4 rounded-full text-secondaryColor  bg-tertiaryColor hover:bg-red-500 transition xl:border-0 border-2 border-secondaryColor"
      >
        <span className="xl:block hidden text-lg font-semibold">
          Recarregar
        </span>
        <div className="xl:block hidden">
          <LuRefreshCcw />
        </div>
        <div className="xl:hidden ">
          <LuRefreshCcw size={40} />
        </div>
      </button>
    </div>
  );
};

export default RefreshButton;
