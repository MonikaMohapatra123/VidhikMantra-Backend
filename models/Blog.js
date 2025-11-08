// models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String },
    content: { type: String, required: true },
    author: { type: String, default: "VidhikMantra Team" }
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
