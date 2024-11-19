import NavBar from "../components/NavBar";
import MobileFooter from "../components/MobileFooter";
import SuggestedUsersCard from "../components/SuggestedUsersCard";
import ConnectedUsersCard from "../components/ConnectedUsersCard";

function ConnectionsPage() {
    return (
        <div className="space-y-4">

            <nav>
                <NavBar name={'Conexões'} />
            </nav>

            <main className="flex flex-col gap-10 items-center scroll-pb-96 mx-5 relative pb-36">
                <h1 className="text-tertiaryColor text-4xl font-bold mt-4">Conexões</h1>
                <SuggestedUsersCard />
                <ConnectedUsersCard />
            </main>

            <footer>
                <MobileFooter />
            </footer>

        </div>
    )
}

export default ConnectionsPage;

