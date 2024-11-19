import NavBar from "../components/NavBar";
import MobileFooter from "../components/MobileFooter";
import CreatePostCard from "../components/CreatePostCard";

function CreatePostMobile() {
    return (
        <div className="space-y-4">

            <nav>
                <NavBar name={'Conexões'} />
            </nav>

            <main className="w-auto">
                <CreatePostCard />
            </main>

            <footer className="xl:hidden block">
                <MobileFooter />
            </footer>

        </div>
    )
}

export default CreatePostMobile;

