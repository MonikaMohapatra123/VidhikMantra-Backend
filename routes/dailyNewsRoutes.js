import express from "express";
import DailyNews from "../models/DailyNews.js";

const router = express.Router();

// ➤ CREATE
router.post("/", async (req, res) => {
  try {
    const news = await DailyNews.create(req.body);
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ GET ALL
router.get("/", async (req, res) => {
  try {
    const allNews = await DailyNews.find().sort({ createdAt: -1 });
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ GET ONE
router.get("/:id", async (req, res) => {
  try {
    const news = await DailyNews.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await DailyNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ➤ DELETE
router.delete("/:id", async (req, res) => {
  try {
    await DailyNews.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
