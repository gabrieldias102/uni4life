import { GiPerson } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileProfileBar from "../components/MobileProfileBar";

const ProfileBar = () => {
    return (
        <div>
            <div>
                <MobileProfileBar/>
            </div>
            <div className="xl:flex gap-28 justify-center hidden">
                <div>
                    <div className="flex items-center gap-20 w-full">
                        <div className="flex">
                            <Link to="/">
                                <button className="text-gray-600 hover:text-black"><IoMdArrowRoundBack size={50}/></button>
                            </Link>
                            <div className="p-8 w-72 h-72 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                                <GiPerson size={250}/>
                            </div>
                        </div>
                        <div>
                            <p className="text-6xl font-semibold">Usuário 1</p>
                            <p className="text-xl font-light my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="my-5 flex gap-10 text-center">
                                <div>
                                    <p className="text-2xl font-bold">350</p>
                                    <p className="text-base">Publicações</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">73</p>
                                    <p className="text-base">Conexões</p>
                                </div>
                            </div>
                            <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 w-full text-2xl rounded-2xl hover:bg-red-500 transition">Editar Perfil</button>
                        </div>
                    </div> 
                </div> 

                <div className="bg-tertiaryColor w-1.5 h-auto rounded-full"></div>

                <div className="flex flex-col items-center gap-2">
                    <div className="bg-tertiaryColor w-36 h-36 rounded-full"></div>
                    <p className="text-tertiaryColor text-4xl font-semibold">Unisinos</p>
                    <p className="text-tertiaryColor text-xl font-semibold">Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-tertiaryColor text-2xl">Aluno</p>
                </div>    
            </div>
        </div>
    )
}

export default ProfileBar;