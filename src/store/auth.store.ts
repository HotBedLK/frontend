import { create } from "zustand";
import {
  loginRequest,
  getProfileRequest,
  registerRequest,
  resendOtpRequest,
  verifyPhoneRequest,
} from "../services";
import type { AuthUser } from "../types/auth.types";
import { tokenStorage } from "../services/token.storage";

interface AuthState {
  isAuthenticated: boolean;
  isAuthReady: boolean;
  user: AuthUser | null;
  isLoading: boolean;
  error: string | null;

  initialize: () => Promise<void>;
  login: (data: {
    mobile_number: string;
    password: string;
  }) => Promise<boolean>;
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

const getAvatarUrl = (user: any) =>
  user?.avatar_url ??
  user?.avatarUrl ??
  user?.profile_image ??
  user?.image ??
  null;

const mapAuthUser = (payload: any): AuthUser => {
  const user = payload?.user ?? payload?.data ?? payload ?? {};
  const firstName = user.first_name ?? user.firstName ?? "";
  const lastName = user.last_name ?? user.lastName ?? "";
  const name =
    user.name ??
    [firstName, lastName].filter(Boolean).join(" ").trim() ??
    user.username ??
    "User";
  const rawRole = user.role ?? user.user_role ?? "VIEWER";
  const role = (
    typeof rawRole === "string" ? rawRole.toUpperCase() : "VIEWER"
  ) as AuthUser["role"];

  return {
    id: String(user.id ?? user.user_id ?? user.uuid ?? ""),
    name,
    role,
    avatarUrl: getAvatarUrl(user),
  };
};

const extractTokens = (payload: any) => ({
  accessToken:
    payload?.token ?? payload?.access_token ?? payload?.accessToken ?? null,
  refreshToken: payload?.refresh_token ?? payload?.refreshToken ?? null,
});

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isAuthReady: false,
  user: null,
  isLoading: false,
  error: null,

  initialize: async () => {
    const accessToken = tokenStorage.getAccessToken();
    if (!accessToken) {
      set({ isAuthenticated: false, user: null, isAuthReady: true });
      return;
    }

    set({ error: null });
    try {
      const profile = await getProfileRequest();
      const user = mapAuthUser(profile);
      set({
        isAuthenticated: true,
        user,
        isAuthReady: true,
      });
    } catch {
      tokenStorage.clearTokens();
      set({
        isAuthenticated: false,
        user: null,
        isAuthReady: true,
      });
    }
  },

  login: async (data) => {
    set({ isLoading: true, error: null });

    try {
      const res = await loginRequest(data);
      const { accessToken, refreshToken } = extractTokens(res);
      if (!accessToken || !refreshToken) {
        throw new Error("Token response is missing.");
      }

      tokenStorage.setTokens(accessToken, refreshToken);
      // const profile = await getProfileRequest();
      // ths is just a test data because of user profile end point not finalize yet
      const profile = {
        user: {
          id: "12345678",
          first_name: "Sachintha",
          last_name: "Nimesh",
          role: "ADMIN",
          avatar_url: "/user-avatar-default",
        },
      };
      const user = mapAuthUser(profile);
      set({
        isAuthenticated: true,
        user,
        isLoading: false,
        isAuthReady: true,
      });

      return true;
    } catch (err: any) {
      tokenStorage.clearTokens();
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
      isAuthReady: true,
    }),

  logout: () => {
    tokenStorage.clearTokens();
    set({
      isAuthenticated: false,
      user: null,
    });
  },
}));
