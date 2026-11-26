const express = require("express");
const {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

const router = express.Router();

router.get("/", getQuestions);
router.get("/:slug", getQuestion);

// TODO (step 3 - auth): restrict these to admins.
router.post("/", createQuestion);
router.put("/:slug", updateQuestion);
router.delete("/:slug", deleteQuestion);

module.exports = router;
