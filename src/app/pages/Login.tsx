import React, { useState } from "react";
import { GiBookCover } from "react-icons/gi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError("Erro ao fazer login: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen">

      <div className="flex flex-col items-center text-2xl text-secondaryColor bg-tertiaryColor border-2 border-primaryColor rounded-full p-6 ">
        <GiBookCover size={50}/>
        <h1>Uni4Life</h1>
      </div>

      <div className="w-full max-w-md p-6 border-2 border-primaryColor bg-secondaryColor rounded-2xl shadow-2xl">
        <h2 className="text-2xl text-primaryColor font-bold text-center mb-6">Login</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm mb-2 font-bold text-primaryColor"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 text-primaryColor font-semibold border-2 border-primaryColor rounded hover:border-tertiaryColor"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm mb-2 font-bold text-primaryColor"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-primaryColor font-semibold border-2 border-primaryColor rounded hover:border-tertiaryColor"
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 text-secondaryColor font-semibold bg-tertiaryColor rounded ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500"
            }`}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-primaryColor font-medium">
            Não tem uma conta?{" "}
            <Link to="/register" className="text-tertiaryColor hover:text-red-500 hover:underline">
              Registre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
