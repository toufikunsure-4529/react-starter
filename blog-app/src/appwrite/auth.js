import { Account, Client, ID } from "appwrite";
import { toast } from "react-toastify";
import conf from "../conf/conf";

//we create auth service class base better approce for object to login signup method access and another backend services create to simple change constructor method and other littely changes

class AuthService {
  client = new Client(); //it is method to store cliend appwrite url and project id
  account; //account variable intilized

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }

  //simply signup method appwrite services used when method run .createAccout run
  async createAccount({ email, password, name }) {
    try {
      console.log("Please Wait....")
      const userAccount = await this.account.create(ID.unique(), email, password, name) //create is appwrite create account method parametor expect 1st id ID.uniwue() is a appwrite method email password so on...
      if (userAccount) {
        this.login({ email, password })
        toast.success("User Create Success Please Login")
      }
      else {
        return userAccount;
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  //login method
  async login({ email, password }) {
    try {
      const userLogin = await this.account.createEmailSession(email, password)
      toast.success("Logged Successfull")
      return userLogin;
    } catch (error) {
      toast.error(error.message)
    }
  }


  //getCurrent user because user link thorugh home page visit to check user logdin or not
  async getCurrentUser() {
    try {
      const currentUser = await this.account.get()
      return currentUser;
    } catch (error) {
      console.log(error.message)
    }
    return null; //if current user not found && try catch error simply method return null value;
  }

  //logout method
  async logout() {
    try {
      const session = await this.account.deleteSessions()
      toast.success("Logout Success")
      return session

    } catch (error) {
      toast.error(error.message)
    }
  }

}


export const authServiceObj = new AuthService(); //simple class to create object and intilized authServiceObj.login to call login mrthod when want to simple this variable to dot method to access class property any places