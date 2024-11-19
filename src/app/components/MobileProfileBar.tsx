import { GiPerson } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";

const MobileProfileBar = () => {
    return (
        <div className="xl:hidden flex flex-col mx-4">

            <div className="flex gap-3 items-center mb-4">
                <div className="p-4 w-14 h-14 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                    <FaBuilding size={50}/>
                </div>
                <div className="flex flex-col">
                    <p className="text-tertiaryColor text-xl font-semibold">Unisinos</p>
                    <p className="text-tertiaryColor text-base font-medium">Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-tertiaryColor text-base font-normal">Aluno</p>
                </div>
            </div>

            <div className="my-1 mx-auto h-px w-1/5 bg-gray-400"></div>

            <div>
                <div className="flex gap-3 items-center mt-3">
                    <div className="p-4 w-28 h-28 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                        <GiPerson size={100}/>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Usuário 1</p>
                        <p className="text-base font-light">@Usuario1</p>
                        <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="flex gap-6 items-center my-4">
                    <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 text-lg font-semibold rounded-2xl active:bg-red-500">Editar Perfil</button>
                    <div>
                        <p className="text-lg font-bold">350</p>
                        <p className="text-base">Publicações</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">73</p>
                        <p className="text-base">Conexões</p>
                    </div>
                </div>
            </div>

            <div className="my-4 h-px w-full bg-gray-600"></div>

        </div>
    )
}

export default MobileProfileBar;