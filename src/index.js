import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/connection.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

connectDB();
