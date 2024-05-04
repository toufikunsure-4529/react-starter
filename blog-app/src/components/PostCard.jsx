import React from "react";
import { Link } from "react-router-dom";
import dbServices from "../appwrite/config";

//PostCard pass a props which is delaing appwrite service quert=y and [$id it is apqrite id post id  syntax for appwrite]
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-blue-300 rounded-xl p-4 ">
        <div className="w-full justify-center mb-4">
          <img
            src={dbServices.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />{" "}
          {/* This url call for appwrite service class method used this method call and pass feturedImage it is image id*/}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
