const express = require("express");
const {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getQuestions);
router.get("/:slug", getQuestion);

router.post("/", protect, adminOnly, createQuestion);
router.put("/:slug", protect, adminOnly, updateQuestion);
router.delete("/:slug", protect, adminOnly, deleteQuestion);

module.exports = router;
