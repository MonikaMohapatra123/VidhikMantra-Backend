import mongoose from "mongoose";

const dailyNewsSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true },
    image: { type: String }, // optional
    shortDescription: { type: String, required: true },
    fullNews: { type: String, required: true },
  },
  { timestamps: true } // createdAt will act as date
);

export default mongoose.model("DailyNews", dailyNewsSchema);
