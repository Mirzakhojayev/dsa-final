const Question = require("../model/questionModel/questionModel");

const LIST_FIELDS = "slug order title difficulty category description createdAt";
const EXCERPT_LENGTH = 200;
const MAX_LIMIT = 100;

// First paragraph of the description as plain text, cut to EXCERPT_LENGTH.
const toExcerpt = (description) => {
  const text = description.split(/\n\s*\n/)[0].replace(/`/g, "").trim();
  return text.length > EXCERPT_LENGTH
    ? `${text.slice(0, EXCERPT_LENGTH).trimEnd()}...`
    : text;
};

// GET /api/questions
// Query params (optional):
//   sort=newest  - most recently added first (default: by order)
//   limit=N      - return at most N questions (1-100)
const getQuestions = async (req, res) => {
  const sort = req.query.sort === "newest" ? { createdAt: -1 } : { order: 1 };
  const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 0, 0), MAX_LIMIT);

  const questions = await Question.find({}, LIST_FIELDS).sort(sort).limit(limit).lean();

  res.json(
    questions.map(({ description, ...q }) => ({
      ...q,
      excerpt: toExcerpt(description),
    }))
  );
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
