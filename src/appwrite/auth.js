
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }


  
async login({ email, password }) {
    try {
        const session = await this.account.createEmailPasswordSession(email, password);
        console.log('Login successful, session:', session); // Check session creation
        return session;
    } catch (error) {
        console.error('Login failed:', error.message);
        throw error;
    }
}




 async getCurrentUser() {
    try {
        const user = await this.account.get();
        return user;
    } catch (error) {
        console.log("appwrite service :: getCurrentUser :: error", error.message);
        if (error.message.includes('missing scope')) {
            console.log('User is not logged in.');
        }
        return null;
    }
 }


 
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite service :: logout :: error", error);
    }
  }
}

// Export an instance of AuthService as authService
export const authService = new AuthService();
