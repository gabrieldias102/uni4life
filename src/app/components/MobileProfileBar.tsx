import { FaBuilding, FaUserAlt } from "react-icons/fa";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const MobileProfileBar = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userUid, setUserUid] = useState("");
  const [userName, setUserName] = useState("");
  const [conectionsCount, setConectionsCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email || "");
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userUid) return;

    setIsLoading(true);
    fetch(`https://uni4life-api.vercel.app/users/${userUid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserName(data.name);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      });

    fetch(`https://uni4life-api.vercel.app/friendlist/${userUid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const friendCount = Array.isArray(data.users) ? data.users.length : 0;
        setConectionsCount(friendCount);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    fetch(`https://uni4life-api.vercel.app/posts/count/${userUid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPostCount(data.postCount);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [userUid]);

  return (
    <div className="xl:hidden flex flex-col mx-4">
      <div className="flex gap-3 items-center mb-4">
        <div className="p-4 w-14 h-14 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
          <FaBuilding size={50} />
        </div>
        <div className="flex flex-col">
          <p className="text-tertiaryColor text-xl font-semibold">Unisinos</p>
          <p className="text-tertiaryColor text-base font-medium">
            Análise e Desenvolvimento de Sistemas
          </p>
          <p className="text-tertiaryColor text-base font-normal">Aluno</p>
        </div>
      </div>

      <div className="my-1 mx-auto h-px w-1/5 bg-gray-400"></div>

      <div>
        <div className="flex gap-3 items-center mt-3">
          <div className="p-5 w-28 h-28 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
            <FaUserAlt size={100} />
          </div>
          <div>
            <p className="text-lg font-semibold">
              {isLoading ? "Carregando..." : userName}
            </p>
            <p className="text-base font-light">{userEmail}</p>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-center my-4">
          <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 text-lg font-semibold rounded-2xl active:bg-red-500">
            Editar Perfil
          </button>
          <div>
            <p className="text-lg font-bold">{postCount}</p>
            <p className="text-base">Publicações</p>
          </div>
          <div>
            <p className="text-lg font-bold">{conectionsCount}</p>
            <p className="text-base">Conexões</p>
          </div>
        </div>
      </div>

      <div className="my-4 h-px w-full bg-gray-600"></div>
    </div>
  );
};

export default MobileProfileBar;
