const mongooes = require('mongoose');

const questionSchema = new mongooes.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      required: true
    },
    example: {
      type: String,
      required: true
    },
    constraints: {
      type: String,
      required: true
    },
    testCases: {
      type: [String],
      required: true
    },
  }
);

module.exports = mongooes.model('Question', questionSchema);