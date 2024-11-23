import { GiPerson } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileProfileBar from "./MobileProfileBar";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const ProfileBar = () => {
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

    fetch(`https://uni4life-api.vercel.app/posts/friends/count/${userUid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setConectionsCount(data.friendCount);
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
    <div>
      <div>
        <MobileProfileBar />
      </div>
      <div className="xl:flex gap-28 justify-center hidden">
        <div>
          <div className="flex items-center gap-20 w-full">
            <div className="flex">
              <Link to="/">
                <button className="text-gray-600 hover:text-black">
                  <IoMdArrowRoundBack size={50} />
                </button>
              </Link>
              <div className="p-8 w-72 h-72 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                <GiPerson size={250} />
              </div>
            </div>
            <div>
              <p className="text-5xl font-bold">
                {isLoading ? "Carregando..." : userName}
              </p>
              <p className="text-xl font-light pl-1 my-1">{userEmail}</p>
              <p className="text-xl font-light mb-1 ml-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="my-5 flex gap-10 text-center">
                <div>
                  <p className="text-2xl font-bold">{postCount}</p>
                  <p className="text-base">Publicações</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{conectionsCount}</p>
                  <p className="text-base">Conexões</p>
                </div>
              </div>
              <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 w-full text-2xl rounded-2xl hover:bg-red-500 transition">
                Editar Perfil
              </button>
            </div>
          </div>
        </div>

        <div className="bg-tertiaryColor w-1.5 h-auto rounded-full"></div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-tertiaryColor text-secondaryColor p-7 rounded-full flex items-center justify-center">
            <FaBuilding size={80} />
          </div>
          <p className="text-tertiaryColor text-4xl font-semibold">Unisinos</p>
          <p className="text-tertiaryColor text-xl font-semibold">
            Análise e Desenvolvimento de Sistemas
          </p>
          <p className="text-tertiaryColor text-2xl">Aluno</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
