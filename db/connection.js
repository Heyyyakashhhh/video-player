import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]); //dns error in mongodb connection error

const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected || DB HOST: ${conectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
