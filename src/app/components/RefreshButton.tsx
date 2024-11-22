import { LuRefreshCcw } from "react-icons/lu";

interface RefreshButtonProps {
  onClick: () => void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <div className="flex items-center">
      <button className="flex gap-3 items-center justify-center mx-auto xl:py-2 xl:px-4 xl:rounded-2xl p-4 rounded-full text-secondaryColor  bg-tertiaryColor hover:bg-red-500 transition">
        <span className="xl:block hidden text-lg font-semibold">
          Recarregar
        </span>
        <div className="xl:block hidden">
          <LuRefreshCcw />
        </div>
        <div className="xl:hidden">
          <LuRefreshCcw size={40} />
        </div>
      </button>
    </div>
  );
};

export default RefreshButton;
