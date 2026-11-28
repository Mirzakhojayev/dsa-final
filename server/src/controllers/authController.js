const User = require("../model/userModel/userModel");
const { signToken } = require("../utils/token");

const PASSWORD_MIN = 8;
const PASSWORD_MAX = 72; // bcrypt ignores anything past 72 bytes

const authResponse = (user) => ({ token: signToken(user), user });

// POST /api/auth/register  { firstName, lastName, email, password }
const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body ?? {};

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ message: "firstName, lastName, email and password are required" });
  }
  if (typeof password !== "string" || password.length < PASSWORD_MIN || password.length > PASSWORD_MAX) {
    return res
      .status(400)
      .json({ message: `Password must be ${PASSWORD_MIN}-${PASSWORD_MAX} characters` });
  }

  const exists = await User.exists({ email: String(email).toLowerCase().trim() });
  if (exists) {
    return res.status(409).json({ message: "Email is already registered" });
  }

  // role is not taken from the body: new accounts are always "user".
  const user = await User.create({ firstName, lastName, email, password });
  res.status(201).json(authResponse(user));
};

// POST /api/auth/login  { email, password }
const login = async (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }

  const user = await User.findOne({ email: String(email).toLowerCase().trim() }).select("+password");
  // Same message for unknown email and wrong password, so emails can't be probed.
  if (!user || !(await user.comparePassword(String(password)))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json(authResponse(user));
};

// GET /api/auth/me  (requires protect)
const me = (req, res) => {
  res.json(req.user);
};

module.exports = { register, login, me };
