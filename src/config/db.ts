

import mongoose from "mongoose";



export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI! );

    console.log("mongo connection is successfully established")
  }
  catch (error) {
    console.error(" mongo connection error: ", error);
    process.exit(1);
  }
}