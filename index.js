import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/connection.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDB()
  .thengit (() => {})
  .catch((error) => console.log(`mongodb connection error!!! ${error}`));
