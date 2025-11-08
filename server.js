const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// DEFAULT ROOT ROUTE (Important for Vercel)
app.get("/", (req, res) => {
  res.send("VidhikMantra Backend Running Successfully");
});

// API ROUTES
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/case-studies", require("./routes/caseStudyRoutes"));

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
