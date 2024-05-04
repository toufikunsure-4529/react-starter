import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";


//Databases Services used 
export class DatabaseServices {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client) //this is database
    this.storage = new Storage(this.client) //its a storage images
  }

  //create post method
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
        title,
        content,
        featuredImage,
        status,
        userId
      }
      )
    } catch (error) {
      console.log("appwrite | createPost error config.js", error)
    }
  }

  //update post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updatePost(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, //slug define appwrite DB and in this method as it is documents id as it is used
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log("Error updatePost ", error)
    }
  }


  //delete post
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
      console.log("Error deletePost", error)
    }
  }


  //get single post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
      console.log("Error getPost", error)

    }
  }

  //get all post if active post
  async getPosts(queries = [Query.equal("status", "active")]) { //used appwrite Query to Db under status active to getPosts
    try {
      return this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
    } catch (error) {
      console.log("Error getPosts", error)

    }
  }

    //file upload methods

  //image file upload methods
  async uploadFile(file) {
    try {
      return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file)
    } catch (error) {
      console.log("Error uploadFile", error)
      return false
    }
  }

  //image file upload delete method
  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId)
    } catch (error) {
      console.log("Error deleteFile", error)
      return false
    }
  }


  //image get filepreview
  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId)
  }

}



const dbServices = new DatabaseServices()

export default dbServices