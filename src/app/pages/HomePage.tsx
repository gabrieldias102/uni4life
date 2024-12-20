import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import AddedFriends from "../components/AddedFriends";
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
          <AddedFriends />
        </aside>

        <main className="flex flex-col gap-5 h-full w-full pb-28">
          <div className="xl:block hidden">
            <CreatePostCard />
          </div>

          <PostFeed />

          <div className="flex flex-col gap-5 fixed bottom-28 right-6">
            <div className="xl:hidden">
              <RefreshButton />
            </div>
            <Link
              to="/CreatePost"
              className="xl:hidden flex items-center justify-around text-secondaryColor bg-tertiaryColor p-4 h-16 w-16 rounded-full border-2 border-secondaryColor"
            >
              <FaPencilAlt size={40} />
            </Link>
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
