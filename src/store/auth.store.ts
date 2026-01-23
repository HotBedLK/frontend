import { create } from "zustand";
import {
  loginRequest,
  registerRequest,
  resendOtpRequest,
  verifyPhoneRequest,
} from "../services";
import type { AuthUser } from "../types/auth.types";

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;

  login: (data: { phone: string; password: string }) => Promise<boolean>;
  register: (data: {
    first_name: string;
    last_name: string;
    password: string;
    mobile_number: string;
    email: string;
  }) => Promise<boolean>;
  verifyPhone: (data: {
    email?: string | null;
    mobile_number?: string | null;
    otp: string;
  }) => Promise<boolean>;
  resendOtp: (data: {
    email?: string | null;
    mobile_number?: string | null;
  }) => Promise<boolean>;
  loginDemo: () => void;
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
      const avatarUrl =
        res.user.avatar_url ??
        res.user.avatarUrl ??
        res.user.profile_image ??
        res.user.image ??
        null;

      set({
        isAuthenticated: true,
        user: {
          id: res.user.id,
          name: res.user.name,
          role: res.user.role,
          avatarUrl,
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
        error:
          err.response?.data?.error_message ||
          err.response?.data?.message ||
          "Registration failed",
        isLoading: false,
      });
      return false;
    }
  },
  verifyPhone: async (data) => {
    set({ isLoading: true, error: null });

    try {
      await verifyPhoneRequest(data);
      set({ isLoading: false });
      return true;
    } catch (err: any) {
      set({
        error:
          err.response?.data?.error_message ||
          err.response?.data?.message ||
          "Verification failed",
        isLoading: false,
      });
      return false;
    }
  },
  resendOtp: async (data) => {
    set({ isLoading: true, error: null });

    try {
      await resendOtpRequest(data);
      set({ isLoading: false });
      return true;
    } catch (err: any) {
      set({
        error:
          err.response?.data?.error_message ||
          err.response?.data?.message ||
          "Resend failed",
        isLoading: false,
      });
      return false;
    }
  },
  loginDemo: () =>
    set({
      isAuthenticated: true,
      user: {
        id: "demo-user",
        name: "Demo User",
        role: "VIEWER",
        avatarUrl: null,
      },
      isLoading: false,
      error: null,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));
