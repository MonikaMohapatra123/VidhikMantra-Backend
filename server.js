// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// connect to DB (top-level await is supported in ESM)
await connectDB();

// DEFAULT ROOT ROUTE (Important for Vercel)
app.get("/", (req, res) => {
  res.send("VidhikMantra Backend Running Successfully");
});

// API ROUTES
app.use("/api/blogs", blogRoutes);
app.use("/api/case-studies", caseStudyRoutes);

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
