import React from "react";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import PostFeed from "../components/PostFeed";
import MobileFooter from "../components/MobileFooter";

function ProfilePage() {
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

            <nav className="xl:pb-8 pb-4">
                <NavBar name={'Perfil'} />
            </nav>

            <main className="pb-36">
                <div>
                    <ProfileBar/>
                </div>
                <div className="flex gap-5 justify-center xl:my-10 xl:text-3xl text-gray-600 mb-5 text-xl">
                    <button className="hover:text-black">Publicados</button>
                    <p>|</p>
                    <button className="hover:text-black">Republicados</button>
                </div>
                <div className="xl:w-2/5 mx-auto w-full px-5">
                    <PostFeed posts={posts}/>
                </div>
            </main>

            <footer>
                <MobileFooter />
            </footer>

        </div>
    )
}

export default ProfilePage;

