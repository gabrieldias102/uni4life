import { FaPaperclip } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";

const CreatePostCard = () => {
  return (
    <div className="xl:block bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md hidden">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">
        Criar Publicação
      </h2>

      <textarea
        placeholder="Escreva sua publicação...."
        className="w-full bg-white border border-primaryColor rounded-xl p-2 text-primaryColor resize-none focus:outline-none focus:ring focus:ring-tertiaryColor"
        rows={4}
      ></textarea>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 rounded-2xl hover:bg-red-500 transition">
          Publicar
        </button>

        <div className="flex space-x-3">
          <button className="p-2 bg-tertiaryColor rounded-full text-secondaryColor hover:bg-red-500 transition">
            <AiFillPicture size={20} />
          </button>
          <button className="p-2 bg-tertiaryColor rounded-full text-secondaryColor hover:bg-red-500 transition">
            <FaPaperclip size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
