import { Account, Client, ID } from "appwrite";
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
        this.login({n})
        console.log("User Create Success...")
      }
      else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error : appwrite auth createAccoount", error);
    }
  }

  //login method
  async login({ email, password }) {
    try {
      const userLogin = await this.account.createEmailSession(email, password)
      return userLogin;
    } catch (error) {
      console.log("Error : appwrite auth login", error)
    }
  }


  //getCurrent user because user link thorugh home page visit to check user logdin or not
  async getCurrentUser() {
    try {
      const currentUser = await this.account.get()
      return currentUser;
    } catch (error) {
      console.log("Error : appwrite auth getCurrentUser", error)
    }
    return null; //if current user not found && try catch error simply method return null value;
  }

  //logout method
  async logout() {
    try {
      return await this.account.deleteSessions()
      console.log("done")
    } catch (error) {
      console.log("Error : appwrite auth logout", error) //all tab sesson not logout deleteSession('current') but we all tab deleteSessions used
    }
  }

}


export const authServiceObj = new AuthService(); //simple class to create object and intilized authServiceObj.login to call login mrthod when want to simple this variable to dot method to access class property any places