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


function HomePage() {
  const posts = [
    {
      userName: "Usuário 3",
      userHandle: "Usuario3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum id eaque facilis similique, labore atque expedita ut quaerat officia natus consectetur unde maiores sunt.",
    },
    {
      userName: "Usuário 4",
      userHandle: "Usuario4",
      content: "Another example post for the feed!",
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <nav className="pb-8">
        <NavBar name={'Página Inicial'} />
      </nav>

      <div className="flex flex-row gap-8 px-8 flex-grow">
        <aside className="xl:flex flex-col gap-8 h-full w-2/5 hidden">
          <ProfileCard />
          <ConnectedUsersCard />
        </aside>

        <main className="flex flex-col gap-16 h-full w-full pb-48">
          <div className="xl:block hidden">
            <CreatePostCard />
          </div>
          <PostFeed posts={posts} />
          <Link to="/CreatePost" className="xl:hidden flex items-center justify-around text-secondaryColor bg-tertiaryColor p-4 rounded-full fixed bottom-28 right-6">
            <FaPencilAlt size={40}/>
          </Link>
        </main>

        <aside className="xl:flex flex-col gap-8 h-full w-2/5 hidden">
          <OrganizationCard />
          <SuggestedUsersCard />
        </aside>
      </div>

      <footer className="xl:hidden fixed bottom-0 w-full">
          <MobileFooter />
      </footer>

    </div>
  );
}

export default HomePage;
