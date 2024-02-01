import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const mongoURI = process.env.MONGO_URL;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }

  // Additional event handling for better debugging
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
};

export default connectToMongo;
