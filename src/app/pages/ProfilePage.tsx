import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import PostFeed from "../components/PostFeed";
import MobileFooter from "../components/MobileFooter";

function ProfilePage() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="xl:pb-8 pb-4">
        <NavBar name={"Perfil"} />
      </nav>

      <main className="pb-28">
        <div>
          <ProfileBar />
        </div>
        <div className="flex gap-5 justify-center xl:my-10 xl:text-3xl text-gray-600 mb-5 text-xl">
          <button className="hover:text-black">Publicados</button>
          <p>|</p>
          <button className="hover:text-black">Republicados</button>
        </div>
        <div className="xl:w-2/5 mx-auto w-full px-5">
          <PostFeed />
        </div>
      </main>

      <footer className="xl:hidden block">
        <MobileFooter />
      </footer>
    </div>
  );
}

export default ProfilePage;
