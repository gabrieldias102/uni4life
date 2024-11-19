import NavBar from "../components/NavBar";
import MobileFooter from "../components/MobileFooter";

function CreatePostMobile() {
    return (
        <div className="space-y-4">

            <nav>
                <NavBar name={'Conexões'} />
            </nav>

            <main className="flex flex-col gap-10 items-center scroll-pb-96 mx-5 relative pb-28">

            </main>

            <footer className="xl:hidden block">
                <MobileFooter />
            </footer>

        </div>
    )
}

export default CreatePostMobile;

