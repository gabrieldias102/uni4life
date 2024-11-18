import NavBar from "../components/NavBar";
import MobileFooter from "../components/MobileFooter";
import SuggestedUsersCard from "../components/SuggestedUsersCard";
import ConnectedUsersCard from "../components/ConnectedUsersCard";

function ConnectionsPage() {
    return (
        <div className="flex flex-col h-screen">

            <nav className="xl:pb-8 pb-4">
                <NavBar name={'Conexões'} />
            </nav>

            <main className="flex flex-col gap-10 items-center">
                <h1></h1>
                <SuggestedUsersCard />
                <ConnectedUsersCard />
            </main>

            <footer className="xl:hidden block">
                <MobileFooter />
            </footer>

        </div>
    )
}

export default ConnectionsPage;

