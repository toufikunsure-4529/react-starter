import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import dbServices from "../appwrite/config";
import { Container, PostCard } from "../components/index";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    dbServices
      .getPosts([]) //if get active post to appwrite query pass to get on array queries = [Query.equal("status", "active")]
      .then((post) => {
        if (post) {
          setPosts(post.documents); //get all document sset posts variable under
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} /> {/*//asprops wants for Post card*/}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
