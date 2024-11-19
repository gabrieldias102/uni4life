import NavBar from "../components/NavBar";
import MobileFooter from "../components/MobileFooter";
import CreatePostCard from "../components/CreatePostCard";

function CreatePostMobile() {
    return (
        <div className="h-screen flex flex-col justify-between bg-secondaryColor">
            <nav className="">
                <NavBar name={'Conexões'} />
            </nav>

            <main className="h-4/5 flex items-center">
                <CreatePostCard/>
            </main>

            <footer className="h-28">
                <MobileFooter />
            </footer>

        </div>
    )
}

export default CreatePostMobile;

