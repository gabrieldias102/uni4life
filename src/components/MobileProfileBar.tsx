import { GiPerson } from "react-icons/gi";


const MobileProfileBar = () => {
    return (
        <div className="xl:hidden flex flex-col mx-5">

            <div className="flex gap-3 items-center mb-4">
                <div className="p-2 w-12 h-12 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                    <GiPerson size={50}/>
                </div>
                <div className="flex flex-col">
                    <p className="text-tertiaryColor text-xl font-semibold">Unisinos</p>
                    <p className="text-tertiaryColor text-base font-medium">Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-tertiaryColor text-base font-normal">Aluno</p>
                </div>
            </div>

            <div>
                <div className="flex gap-3 items-center">
                    <div className="p-4 w-32 h-32 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
                        <GiPerson size={100}/>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Usuário 1</p>
                        <p className="text-base font-light">@Usuario1</p>
                        <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="flex gap-8 items-center my-3">
                    <button className="bg-tertiaryColor text-secondaryColor px-4 py-2 text-xl font-semibold rounded-2xl active:bg-red-500">Editar Perfil</button>
                    <div>
                        <p className="text-xl font-bold">350</p>
                        <p className="text-base">Publicações</p>
                    </div>
                    <div>
                        <p className="text-xl font-bold">73</p>
                        <p className="text-base">Conexões</p>
                    </div>
                </div>
            </div>

            <div className="my-4 h-px width-full bg-gray-600"></div>

        </div>
    )
}

export default MobileProfileBar;