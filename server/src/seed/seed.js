// Usage: npm run seed
// Inserts or updates every question in questions.js, matched by slug.
// Questions that are in the database but not in the file are left alone.
require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("../model/questionModel/questionModel");
const questions = require("./questions");

const run = async () => {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not set. Copy .env.example to .env and fill it in.");
  }
  await mongoose.connect(process.env.MONGO_URL);

  for (const q of questions) {
    await Question.findOneAndUpdate({ slug: q.slug }, q, {
      upsert: true,
      new: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    });
    console.log(`  ✓ ${q.order}. ${q.title}`);
  }
  console.log(`Seeded ${questions.length} questions.`);
};

run()
  .catch((err) => {
    console.error("Seeding failed:", err.message);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
