import React from "react";
import NavBar from "../components/NavBar";
import ProfileBar from "../components/ProfileBar";
import PostFeed from "../components/PostFeed";

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
        <div>
            <nav className="pb-8">
                <NavBar name={'Perfil'} />
            </nav>
            <main>
                <div>
                    <ProfileBar/>
                </div>

                <div className="flex gap-5 justify-center my-10 text-3xl text-gray-600">
                    <button className="hover:text-black">Publicados</button>
                    <p>|</p>
                    <button className="hover:text-black">Republicados</button>
                </div>
                
                <div className="w-2/5 mx-auto">
                    <PostFeed posts={posts}/>
                </div>
            </main>
        </div>
    )
}

export default ProfilePage;

