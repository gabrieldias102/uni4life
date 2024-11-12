import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import ConnectedUsersCard from "./components/ConnectedUsersCard";
import CreatePostCard from "./components/CreatePostCard";

function HomePage() {
  return (
    <div>
      <nav className="pb-8">
        <NavBar />
      </nav>
      <div className="flex flex-row">
        <aside className="flex flex-col gap-16 pl-4 h-full w-2/5">
          <ProfileCard />
          <ConnectedUsersCard />
        </aside>
        <main className="flex flex-col gap-16 h-full w-full">
          <CreatePostCard />
        </main>

        <aside className="flex flex-col gap-16 pr-4 h-full w-2/5"></aside>
      </div>
    </div>
  );
}

export default HomePage;
