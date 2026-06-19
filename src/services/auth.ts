import { api } from "@/lib/axios";

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
};

export const authService = {
  signIn: (data: SignInPayload) => api.post<AuthResponse>("/auth/sign-in", data),
  signUp: (data: SignUpPayload) => api.post<AuthResponse>("/auth/sign-up", data),
  me: () => api.get<AuthResponse["user"]>("/auth/me"),
  logout: () => api.post<void>("/auth/logout"),
};