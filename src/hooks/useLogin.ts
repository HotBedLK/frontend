import { useState } from "react";
import { authService } from "../services/auth.service";
import type { LoginPayload, LoginResult } from "../services/auth.service";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload): Promise<LoginResult> => {
    setIsLoading(true);
    setError(null);
    try {
      return await authService.login(payload);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Login failed. Try again.";
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
