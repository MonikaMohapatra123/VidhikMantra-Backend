const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/case-studies", require("./routes/caseStudyRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
