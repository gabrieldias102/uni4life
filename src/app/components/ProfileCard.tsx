import { GiPerson } from "react-icons/gi";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userUid, setUserUid] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email || "");
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

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
  }, [userUid]);
  return (
    <div className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md max-w-sm mx-auto w-full">
      <h2 className="text-teal-600 text-2xl font-bold mb-4">Seu Perfil</h2>

      <div className="flex items-center mb-4">
        <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center text-xl font-bold">
          <GiPerson size={35} />
        </div>
        <div className="ml-4">
          <p className="text-primaryColor text-xl font-bold">
            {isLoading ? "Carregando..." : userName}
          </p>
          <p className="text-primaryColor pl-0.5 text-sm">{userEmail}</p>
        </div>
      </div>

      <Link to="/Profile">
        <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 w-full rounded-2xl hover:bg-red-500 transition">
          Ver Perfil
        </button>
      </Link>
    </div>
  );
};

export default ProfileCard;
