// models/CaseStudy.js
import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    client: { type: String },
    outcome: { type: String },
    tags: [{ type: String }],
    image: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("CaseStudy", caseStudySchema);
