import {Client , Account , Databases } from "appwrite"

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66e0399d0013a2b2ca0c");

export const account = new Account(client);
export const database = new Databases(client , "66e03c63000e249b1eb8");