// Usage: npm run make-admin -- user@example.com
// Gives an existing user the "admin" role.
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../model/userModel/userModel");

const run = async () => {
  const email = process.argv[2];
  if (!email) throw new Error("Usage: npm run make-admin -- user@example.com");
  if (!process.env.MONGO_URL) throw new Error("MONGO_URL is not set.");

  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOneAndUpdate(
    { email: email.toLowerCase().trim() },
    { role: "admin" },
    { new: true }
  );
  if (!user) throw new Error(`No user with email ${email}`);
  console.log(`${user.email} is now an admin.`);
};

run()
  .catch((err) => {
    console.error(err.message);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
