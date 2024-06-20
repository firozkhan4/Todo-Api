import mongoose from "mongoose";

async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI + "todo");
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("MongoDB connection error " + error);
  }
}

export default connectDB;
