import { create } from "zustand";
import { loginRequest, registerRequest } from "../services";
import type { AuthUser } from "../types/auth.types";

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;

  login: (data: { phone: string; password: string }) => Promise<boolean>;
  register: (data: {
    first_name: String;
    last_name: String;
    password: String;
    mobile_number: String;
    email: String;
  }) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,

  login: async (data) => {
    set({ isLoading: true, error: null });

    try {
      const res = await loginRequest(data);

      set({
        isAuthenticated: true,
        user: {
          id: res.user.id,
          name: res.user.name,
          role: res.user.role,
        },
        isLoading: false,
      });

      return true;
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Login failed",
        isLoading: false,
      });
      return false;
    }
  },
  register: async (data) => {
    set({ isLoading: true, error: null });

    try {
      await registerRequest(data);
      set({ isLoading: false });
      return true;
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Registration failed",
        isLoading: false,
      });
      return false;
    }
  },

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));
