import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types/user";

interface AuthStore {
  token: string | null;
  user: User | null;
  // False until the saved login has been read from localStorage (see AuthProvider).
  // Until then, don't decide "logged out" (e.g. don't redirect to /login).
  hydrated: boolean;
  setAuth: (token: string, user: User) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      hydrated: false,
      setAuth: (token, user) => set({ token, user }),
      setUser: (user) => set({ user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: "dsa-auth",
      partialize: (state) => ({ token: state.token, user: state.user }),
      // Rehydrated manually after mount, so the server render and the first
      // client render match (both start logged out).
      skipHydration: true,
    }
  )
);
