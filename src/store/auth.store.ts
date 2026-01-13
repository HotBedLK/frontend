import type { AuthUser } from "../types/auth.types";

export const authStore = {
  isAuthenticated: true,
  user: {
    id: "1",
    name: "Sachintha",
    role: "LISTERS",
  } as AuthUser,
};
