import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("69a8ef2800253a49e2c8");

export const account = new Account(client);
export const databases = new Databases(client);