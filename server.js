
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// import blogRoutes from "./routes/blogRoutes.js";
// import caseStudyRoutes from "./routes/caseStudyRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Vidhik Mantra Backend is running...");
// });

// // Routes
// app.use("/api/blogs", blogRoutes);
// app.use("/api/casestudies", caseStudyRoutes);

// // Connect MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import blogRoutes from "./routes/blogRoutes.js";
import caseStudyRoutes from "./routes/caseStudyRoutes.js";
import dailyNewsRoutes from "./routes/dailyNewsRoutes.js";  // <-- NEW IMPORT

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Vidhik Mantra Backend is running...");
});

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/casestudies", caseStudyRoutes);
app.use("/api/dailynews", dailyNewsRoutes);  // <-- NEW ROUTE

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
