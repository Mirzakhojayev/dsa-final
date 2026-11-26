import type { Question, QuestionListItem } from "@/types/question";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4002";

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    // Network failure: server down, wrong URL, CORS, etc.
    throw new ApiError("Serverga ulanib bo'lmadi", 0);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(body?.message ?? res.statusText, res.status);
  }

  return res.status === 204 ? (undefined as T) : res.json();
}

export type GetQuestionsOptions = {
  sort?: "order" | "newest";
  limit?: number;
};

export const getQuestions = (
  { sort, limit }: GetQuestionsOptions = {},
  init?: RequestInit
) => {
  const params = new URLSearchParams();
  if (sort) params.set("sort", sort);
  if (limit) params.set("limit", String(limit));
  const query = params.toString() ? `?${params}` : "";
  return request<QuestionListItem[]>(`/api/questions${query}`, init);
};

export const getQuestion = (slug: string, init?: RequestInit) =>
  request<Question>(`/api/questions/${encodeURIComponent(slug)}`, init);
