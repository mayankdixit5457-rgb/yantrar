import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("69a829bb002bf6ce3a84");

export const account = new Account(client);
export const databases = new Databases(client);

