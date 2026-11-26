// Mirrors server/src/model/questionModel/questionModel.js

export type Difficulty = "Easy" | "Medium" | "Hard";

export type Example = {
  input: string;
  output: string;
  explanation?: string;
};

export type TestCase = {
  input: string;
  output: string;
  hidden: boolean;
};

// Returned by GET /api/questions
export type QuestionSummary = {
  _id: string;
  slug: string;
  order: number;
  title: string;
  difficulty: Difficulty;
  category: string;
  createdAt: string;
};

// Returned by GET /api/questions (adds a short plain-text excerpt)
export type QuestionListItem = QuestionSummary & {
  excerpt: string;
};

// Returned by GET /api/questions/:slug (visible test cases only)
export type Question = QuestionSummary & {
  description: string;
  examples: Example[];
  constraints: string[];
  testCases: TestCase[];
};
