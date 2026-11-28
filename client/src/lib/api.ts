import type { Question, QuestionListItem } from "@/types/question";
import type { AuthResponse, User } from "@/types/user";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4002";

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "ApiError";
  }
}

type RequestOptions = RequestInit & {
  // Sent as "Authorization: Bearer <token>" when given.
  token?: string | null;
};

async function request<T>(
  path: string,
  { token, headers, ...init }: RequestOptions = {}
): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
    });
  } catch (err) {
    // Let callers ignore requests they cancelled themselves.
    if (err instanceof DOMException && err.name === "AbortError") throw err;
    // Network failure: server down, wrong URL, CORS, etc.
    throw new ApiError("Serverga ulanib bo'lmadi", 0);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(body?.message ?? res.statusText, res.status);
  }

  return res.status === 204 ? (undefined as T) : res.json();
}

// ---------- Questions ----------

export type GetQuestionsOptions = {
  sort?: "order" | "newest";
  limit?: number;
};

export const getQuestions = (
  { sort, limit }: GetQuestionsOptions = {},
  init?: RequestOptions
) => {
  const params = new URLSearchParams();
  if (sort) params.set("sort", sort);
  if (limit) params.set("limit", String(limit));
  const query = params.toString() ? `?${params}` : "";
  return request<QuestionListItem[]>(`/api/questions${query}`, init);
};

export const getQuestion = (slug: string, init?: RequestOptions) =>
  request<Question>(`/api/questions/${encodeURIComponent(slug)}`, init);

// ---------- Auth ----------

export type RegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export const register = (input: RegisterInput) =>
  request<AuthResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(input),
  });

export const login = (input: LoginInput) =>
  request<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(input),
  });

export const getMe = (token: string) =>
  request<User>("/api/auth/me", { token });
