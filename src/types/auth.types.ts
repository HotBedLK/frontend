export type UserRole = "VIEWER" | "LISTERS" | "ADMIN";

export interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
  avatarUrl?: string | null;
}
