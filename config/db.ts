import mongoose from "mongoose";
import config from "./index";

const connectDB = async () => {
  await mongoose.connect(config.MONGODB_URI);
  console.log("MongoDb Connected");
};

export default connectDB;
