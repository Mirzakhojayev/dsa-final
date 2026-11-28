"use client";

import {useEffect} from "react";
import {ApiError, getMe} from "@/lib/api";
import {useAuthStore} from "@/store/useAuthStore";

// Restores the saved login on page load, then checks it with the server:
// an expired/invalid token logs the user out, a valid one refreshes their data.
const AuthProvider = ({children}: {children: React.ReactNode}) => {
  useEffect(() => {
    let cancelled = false;

    const restore = async () => {
      await useAuthStore.persist.rehydrate();
      const {token, setUser, logout} = useAuthStore.getState();
      useAuthStore.setState({hydrated: true});
      if (!token) return;

      try {
        const user = await getMe(token);
        if (!cancelled) setUser(user);
      } catch (err) {
        // Only log out when the server rejects the token. If the server is
        // just unreachable, keep the cached user.
        if (!cancelled && err instanceof ApiError && err.status === 401) logout();
      }
    };

    restore();
    return () => {
      cancelled = true;
    };
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
