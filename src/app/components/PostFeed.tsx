import { GiPerson } from "react-icons/gi";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineRetweet,
} from "react-icons/ai";
import { useEffect, useState } from "react";

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

const PostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="space-y-4">
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

export default PostFeed;
