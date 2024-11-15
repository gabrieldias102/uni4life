import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import ConnectedUsersCard from "../components/ConnectedUsersCard";
import CreatePostCard from "../components/CreatePostCard";
import OrganizationCard from "../components/OrganizationCard";
import SuggestedUsersCard from "../components/SuggestedUsersCard";
import PostFeed from "../components/PostFeed";

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
    <div>
      <nav className="pb-8">
        <NavBar />
      </nav>
      <div className="flex flex-row gap-8 px-8">
        <aside className="flex flex-col gap-8 h-full w-2/5">
          <ProfileCard />
          <ConnectedUsersCard />
        </aside>
        <main className="flex flex-col gap-16 h-full w-full">
          <CreatePostCard />
          <PostFeed posts={posts} />
        </main>
        <aside className="flex flex-col gap-8 h-full w-2/5">
          <OrganizationCard />
          <SuggestedUsersCard />
        </aside>
      </div>
    </div>
  );
}

export default HomePage;
