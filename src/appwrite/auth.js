import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
// client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
// export const account = new Account(client)
// export default client;

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password1, password2, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password1,
        name
      );
      if (userAccount) {
        // Call Acnother Method
        console.log("user created");
        this.login({ email, password1 });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Auth : CreateAccount :", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Auth : Login :", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Auth : Logout :", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Auth : getCurrentUser :", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
