import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ConnectedUsersCard from "../components/ConnectedUsersCard";
import CreatePostCard from "../components/CreatePostCard";
import OrganizationCard from "../components/OrganizationCard";
import SuggestedUsersCard from "../components/SuggestedUsersCard";
import PostFeed from "../components/PostFeed";
import MobileFooter from "../components/MobileFooter";
import RefreshButton from "../components/RefreshButton";

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="pb-8">
        <NavBar name={"Página Inicial"} />
      </nav>

      <div className="flex flex-row gap-8 px-8 flex-grow">
        <aside className="xl:flex flex-col gap-8 h-full w-2/5 hidden">
          <ProfileCard />
          <ConnectedUsersCard />
        </aside>

        <main className="flex flex-col gap-16 h-full w-full pb-28">
          <div className="xl:block hidden">
            <CreatePostCard />
          </div>
          <PostFeed />
          <Link
            to="/CreatePost"
            className="xl:hidden flex items-center justify-around text-secondaryColor bg-tertiaryColor p-4 rounded-full fixed bottom-28 right-6"
          >
            <FaPencilAlt size={40} />
          </Link>

          <div className="">
            <RefreshButton />
          </div>

        </main>

        <aside className="xl:flex flex-col gap-8 h-full w-2/5 hidden">
          <OrganizationCard />
          <SuggestedUsersCard />
        </aside>
      </div>

      <footer className="xl:hidden block">
        <MobileFooter />
      </footer>
    </div>
  );
}

export default HomePage;
