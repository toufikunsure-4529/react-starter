const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), //.env file db id other this environtvariable must be string store other wise app crush so this reason config object create
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default config