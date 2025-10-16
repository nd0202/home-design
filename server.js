import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { v2 as cloudinary } from "cloudinary";
import { connectDB } from "./config/db.js";
import router from "./route/imageRoutes.js";





dotenv.config();

const app = express();
app.use(cors({
  //origin: "*", // or "http://localhost:5173"
  origin: "https://homedesignnew.netlify.app",
  methods: ["GET", "POST"],
  credentials:true,
  
}));
app.use(express.json());

// ✅ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

connectDB();
app.use('/api/images', router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
