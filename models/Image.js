import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  imageUrl: { type: String, required: true },
  //  publicId: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export const Image = mongoose.model("Image", imageSchema);
