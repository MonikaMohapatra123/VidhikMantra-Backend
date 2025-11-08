// routes/caseStudyRoutes.js
import express from "express";
import CaseStudy from "../models/CaseStudy.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const caseStudy = await CaseStudy.create(req.body);
    res.status(201).json(caseStudy);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  try {
    const list = await CaseStudy.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET ONE
router.get("/:id", async (req, res) => {
  try {
    const item = await CaseStudy.findById(req.params.id);
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await CaseStudy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await CaseStudy.findByIdAndDelete(req.params.id);
    res.json({ message: "Case Study deleted" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
