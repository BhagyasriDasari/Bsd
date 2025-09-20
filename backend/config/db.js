const mongoose = require("mongoose"); // <-- import mongoose

const connectDB = async () => {
  const MONGO_URI =process.env.MONGO_URI;

  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
