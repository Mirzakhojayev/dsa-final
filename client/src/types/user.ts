// Mirrors server/src/model/userModel/userModel.js (password is never sent)

export type Role = "user" | "admin";

export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  solvedQuestions: string[];
  profilePicture: unknown | null;
  createdAt: string;
  updatedAt: string;
};

// Returned by POST /api/auth/register and POST /api/auth/login
export type AuthResponse = {
  token: string;
  user: User;
};
