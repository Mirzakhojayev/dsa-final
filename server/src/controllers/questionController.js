const Question = require("../model/questionModel/questionModel");

const LIST_FIELDS = "slug order title difficulty category";

// GET /api/questions
const getQuestions = async (req, res) => {
  const questions = await Question.find({}, LIST_FIELDS).sort({ order: 1 });
  res.json(questions);
};

// GET /api/questions/:slug  (hidden test cases are never sent to the client)
const getQuestion = async (req, res) => {
  const question = await Question.findOne({ slug: req.params.slug }).lean();
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }
  question.testCases = question.testCases.filter((tc) => !tc.hidden);
  res.json(question);
};

// POST /api/questions
const createQuestion = async (req, res) => {
  const question = await Question.create(req.body);
  res.status(201).json(question);
};

// PUT /api/questions/:slug
const updateQuestion = async (req, res) => {
  const question = await Question.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true, runValidators: true }
  );
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }
  res.json(question);
};

// DELETE /api/questions/:slug
const deleteQuestion = async (req, res) => {
  const question = await Question.findOneAndDelete({ slug: req.params.slug });
  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }
  res.status(204).end();
};

module.exports = {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
