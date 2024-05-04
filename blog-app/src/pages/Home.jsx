import React, { useEffect, useState } from "react";
import dbServices from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbServices.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  if (posts.length > 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen py-8 mt-4 text-center flex justify-center items-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="w-full p-2">
              <h1 className="text-5xl font-bold text-black transition-colors duration-300 hover:text-gray-600">
                Log in to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
