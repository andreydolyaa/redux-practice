import mongoose from "mongoose";
import { sleep } from "./utils.js";

const url = "mongodb://localhost:27017/users";

export const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect to db");
    console.log("reconnecting...");
    await sleep(3000);
    connectDb();
  }
};
