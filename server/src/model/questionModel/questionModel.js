const mongoose = require("mongoose");

// Test case format (stdin/stdout, so it works with Judge0 for every language):
//   input  - stdin, one JSON value per line, e.g. "[2,7,11,15]\n9"
//   output - expected stdout as a single JSON value, e.g. "[0,1]"
const testCaseSchema = new mongoose.Schema(
  {
    input: { type: String, required: true },
    output: { type: String, required: true },
    hidden: { type: Boolean, default: false },
  },
  { _id: false }
);

const exampleSchema = new mongoose.Schema(
  {
    input: { type: String, required: true },
    output: { type: String, required: true },
    explanation: { type: String, default: "" },
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    order: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ["Easy", "Medium", "Hard"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    // Paragraphs are separated by a blank line; `backticks` mark inline code.
    description: {
      type: String,
      required: true,
    },
    examples: {
      type: [exampleSchema],
      default: [],
    },
    constraints: {
      type: [String],
      default: [],
    },
    testCases: {
      type: [testCaseSchema],
      validate: {
        validator: (cases) => cases.length > 0,
        message: "At least one test case is required",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
