import type { AuthUser } from "../types/auth.types";

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface LoginResult {
  token: string;
  user: AuthUser;
}

const mockUser: AuthUser = {
  id: "1",
  name: "Sachintha",
  role: "LISTERS",
};

export const authService = {
  async login(payload: LoginPayload): Promise<LoginResult> {
    if (!payload.phone || !payload.password) {
      throw new Error("Phone number and password are required.");
    }

    await new Promise((resolve) => {
      window.setTimeout(resolve, 500);
    });

    return {
      token: "mock-token",
      user: mockUser,
    };
  },
};
