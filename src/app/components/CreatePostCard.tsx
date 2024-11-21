import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";

const CreatePostCard = () => {
  const [content, setContent] = useState(""); // Estado para o conteúdo da textarea

  const handlePublish = async () => {
    if (!content.trim()) {
      alert("Por favor, escreva algo antes de publicar!");
      return;
    }

    try {
      const response = await fetch("https://uni4life-api.vercel.app/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          authorId: 0,
        }),
      });

      if (response.ok) {
        const newPost = await response.json();
        setContent("");
      } else {
        const errorData = await response.json();
        alert(`Erro ao publicar: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao publicar. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="bg-secondaryColor w-full h-full p-4 xl:border xl:border-primaryColor xl:rounded-3xl xl:shadow-md">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">
        Criar Publicação
      </h2>

      <textarea
        placeholder="Escreva sua publicação...."
        className="w-full xl:h-auto h-4/5 bg-white border border-primaryColor rounded-xl p-2 text-primaryColor resize-none focus:outline-none focus:ring focus:ring-tertiaryColor"
        rows={4}
        value={content} // Vincula o estado ao textarea
        onChange={(e) => setContent(e.target.value)} // Atualiza o estado
      ></textarea>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-5">
          <button
            onClick={handlePublish} // Chama a função de publicar
            className="bg-tertiaryColor text-secondaryColor px-4 py-2 rounded-2xl hover:bg-red-500 transition"
          >
            Publicar
          </button>
          <button className="bg-gray-400 text-secondaryColor px-4 py-2 rounded-2xl active:bg-gray-300 transition xl:hidden">
            Cancelar
          </button>
        </div>

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
