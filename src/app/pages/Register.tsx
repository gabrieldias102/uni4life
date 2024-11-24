import React, { useState } from "react";
import { GiBookCover } from "react-icons/gi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Chamada para API incluindo o nome
      const response = await fetch("https://uni4life-api.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: user.email,
          uid: user.uid,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar usuário na API");
      }

      setSuccess("Usuário registrado com sucesso!");
      navigate("/");
    } catch (err: any) {
      setError("Erro ao registrar: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">

      <div className="xl:flex xl:flex-col hidden items-center justify-center text-2xl font-semibold text-secondaryColor bg-tertiaryColor border-2 border-primaryColor rounded-full p-6 w-36 h-36">
        <GiBookCover size={50}/>
        <h1>Uni4Life</h1>
      </div>

      <div className="w-full xl:h-auto h-screen xl:rounded-2xl xl:border-2 border-4 border-primaryColor flex flex-col justify-center max-w-md p-6 bg-secondaryColor shadow-2xl">

      <div className="xl:hidden flex flex-col items-center justify-center text-lg font-semibold text-secondaryColor bg-tertiaryColor border-2 border-primaryColor rounded-full p-5 w-28 h-28 mx-auto my-4">
        <GiBookCover size={50}/>
        <h1>Uni4Life</h1>
      </div>

        <h2 className="xl:text-2xl text-2xl text-primaryColor font-bold text-center mb-2">Registrar</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        {success && (
          <div className="text-green-500 text-sm mb-4">{success}</div>
        )}

        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block xl:text-sm text-lg font-bold text-primaryColor"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 text-primaryColor xl:text-base text-xl  font-semibold border-2 border-primaryColor rounded hover:border-tertiaryColor"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block xl:text-sm text-lg font-bold text-primaryColor"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-primaryColor xl:text-base text-xl  font-semibold border-2 border-primaryColor rounded hover:border-tertiaryColor"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block xl:text-sm text-lg font-bold text-primaryColor"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-primaryColor xl:text-base text-xl  font-semibold border-2 border-primaryColor rounded hover:border-tertiaryColor"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block xl:text-sm text-lg font-bold text-primaryColor"
            >
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-primaryColor xl:text-base text-xl  font-semibold border-2 border-primaryColor rounded hover:border-tertiaryColor"
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 text-secondaryColor xl:text-base text-xl font-semibold bg-tertiaryColor rounded ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500"
            }`}
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </form>
        <div className="my-4 text-center ">
          <p className="text-primaryColor xl:text-base text-lg font-medium">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-tertiaryColor xl:text-base text-lg hover:text-red-500 hover:underline">
              Acesse por aqui!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
