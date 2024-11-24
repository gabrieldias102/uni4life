import { GiPerson } from "react-icons/gi";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineRetweet,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import RefreshButton from "./RefreshButton";
import { auth } from "./firebase";

interface Post {
  id: string;
  content: string;
  createdAt: string;
  userId: string;
  author: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
  };
}

const ProfilePostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasNewPosts, setHasNewPosts] = useState(false);
  const [userUid, setUserUid] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetch(`https://uni4life-api.vercel.app/posts/user/${userUid}`)
      .then((response) => response.json())
      .then((data) => {
        if (posts.length === 0) {
          setPosts(data);
        } else {
          const latestPosts = data.filter(
            (newPost: Post) => !posts.some((post) => post.id === newPost.id)
          );
          if (latestPosts.length > 0) {
            setHasNewPosts(true);
          }
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [userUid]);

  return (
    <div className="space-y-4">
      <div className="xl:block hidden sticky top-5">
        {hasNewPosts && <RefreshButton />}
      </div>
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-secondaryColor border border-primaryColor rounded-3xl p-4 shadow-md"
        >
          <div className="flex items-center mb-3">
            <div className="p-2 bg-tertiaryColor text-secondaryColor rounded-full flex items-center justify-center">
              <GiPerson size={25} />
            </div>

            <div className="ml-4">
              <p className="text-primaryColor font-semibold">
                {post.author.name}
              </p>
              <p className="text-primaryColor text-sm">{post.author.email}</p>
            </div>
          </div>

          <p className="text-black mb-4">{post.content}</p>

          <div className="flex justify-around items-center">
            <button className="flex items-center text-red-400 space-x-1 hover:text-red-500 transition">
              <AiFillHeart size={20} />
            </button>
            <button className="flex items-center text-red-400 space-x-1 hover:text-red-500 transition">
              <AiOutlineComment size={20} />
            </button>
            <button className="flex items-center text-red-400 space-x-1 hover:text-red-500 transition">
              <AiOutlineRetweet size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProfilePostFeed;
