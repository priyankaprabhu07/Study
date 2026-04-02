import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();


// ✅ Get all todos
router.get("/:user", async (req, res) => {
  try {
    const userId = req.params.user;

    if (!userId) {
      return res.status(400).json({ message: "User ID required" });
    }
    const todos = await Todo.find({ user: userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Add todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
      user: req.body.userId
    });

    const saved = await newTodo.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Delete todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Update todo (edit + checkbox)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// search routes

router.get("/search/:text", async (req, res) => {
  try {
    const searchText = req.params.text;

    const todos = await Todo.find({
      text: { $regex: searchText, $options: "i" } // case-insensitive search
    });

    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;