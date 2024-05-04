import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dbServices from "../../appwrite/config";
import Rte from "../Rte";
import { Input, Select } from "../index";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      //useForm pass default object which is get props and optionally check user pass post to show post other wise blank
      defaultValues: {
        title: post?.title || "", //if post pass optionally to used title other wise blank
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    }); // watch is a  any field continus monitor to used watching capability watch && any inpur element under value set to using setValue && control is form control and which is pass Rte under control state/eveent so on && getValues full form value get using this method

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData); //get userData store to get

  const submit = async (data) => {
    //post are avilable logic start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    if (post) {
      //post are available user need to update
      const file = data.image[0]
        ? await dbServices.uploadFile(data.image[0])
        : null; //check if post available to update form so first update data is form all data react-hook-form get and first images access to appwrite service uploadFile method run and upload
      if (file) {
        await dbServices.deleteFile(post.featuredImage); //post is a object previus data which new file upload to preveus file to be delete featuredImage is image id
      }

      const updatedPost = await dbServices.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined, //update post expect slug is id and whole form data will update spread and overwrite if file new uploaded new file id update store it
      });
      if (updatedPost) {
        navigate(`/post/${updatedPost.$id}`); //when full post updated navigate post id
      }
    } else {
      //IF POST NOT PASS USER TO NEW FILE UPLOAD
      const file = data.image[0]
        ? await dbServices.uploadFile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId; //form data object under featured image to new file uypload to update image id
        const dbNewPost = await dbServices.createPost({
          ...data,
          userId: userData.$id,
        }); //forms never userId get Userdata pass to get store and update
        if (dbNewPost) {
          navigate(`/post/${dbNewPost.$id}`); //when full post create navigate post id
        }
      }
    }
  };

  //two input field one title and another slug to title watch and slug generate text like (first blog -- first-blog)
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      //return this value replace space to underscore(_)
      return (
        value
          .trim()
          .toLowerCase()
          // {wrong fix it
          // // .replace(/^[a-zA-Z\d\s]+/g, "_")
          // // .replace(/\s/g, "_");}
          .replace(/ /g, "-")
      );

      // const slug = value.toLowerCase().replace(/ /g, "-");
      // setValue(slug);
      // return slug;
    }
    return "";
  }, []);

  useEffect(() => {
    //subscription make it watch method [subscription is the best name key for useEffect under method variable hole and unsubscribe it]
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        //title is input field and all title field value set under slug input field as a replace method
        setValue("slug", slugTransform(value.title, { shoudValidate: true })); //method name is title where title found to setValue slug inder setValue
      }
    });
    //return under call back pass in useEffect hooks unsubscribe() method usefull memory managed optimzed for not repeted
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Ttile"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <Rte
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={dbServices.getFIlePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-md"
            />
          </div>
        )}
        <Select
          options={["Active", "Inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <button
          // className={`${
          //   post ? "bg-blue-400  hover:bg-blue-600" : "bg-gray-400"
          // }duration-150 text-white w-full px-4 py-2 rounded-md`}
          className="bg-blue-500 hover:bg-blue-600 duration-150 text-white w-full px-4 py-4 rounded-md"
          type="submit"
        >
          {post ? "Update" : "Submit"}
        </button>{" "}
      </div>
    </form>
  );
}

export default PostForm;
