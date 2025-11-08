// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import blogRoutes from "./routes/blogRoutes.js";        // <-- mount blog routes
import caseStudyRoutes from "./routes/caseStudyRoutes.js"; // optional if exists

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// health / root
app.get("/", (req, res) => {
  res.send("Vidhik Mantra Backend is running...");
});

// mount API routes
app.use("/api/blogs", blogRoutes);
app.use("/api/case-studies", caseStudyRoutes); // remove this line if you don't have caseStudyRoutes

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// server (works locally)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
