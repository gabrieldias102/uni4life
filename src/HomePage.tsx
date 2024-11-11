import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";
import ConnectedUsersCard from "./components/ConnectedUsersCard";

function HomePage() {
  return (
    <div>
      <header className="pb-8">
        <NavBar />
      </header>
      <aside className="flex flex-col gap-16 px-4 h-full w-2/5">
        <ProfileCard />
        <ConnectedUsersCard />
      </aside>
    </div>
  );
}

export default HomePage;
