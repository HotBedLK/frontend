import axios, { type AxiosRequestConfig } from "axios";
import { tokenStorage } from "./token.storage";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const plainApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

let refreshPromise: Promise<string | null> | null = null;

const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken = tokenStorage.getRefreshToken();
  if (!refreshToken) {
    return null;
  }

  const res = await plainApi.post("/auth/refresh", {
    refresh_token: refreshToken,
  });

  const accessToken =
    res.data?.token ?? res.data?.access_token ?? res.data?.accessToken ?? null;
  const nextRefreshToken =
    res.data?.refresh_token ?? res.data?.refreshToken ?? null;

  if (accessToken) {
    tokenStorage.setTokens(accessToken, nextRefreshToken ?? refreshToken);
  }

  return accessToken;
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };
    const requestUrl = originalRequest?.url ?? "";
    const isAuthRequest =
      requestUrl.includes("/auth/login") || requestUrl.includes("/auth/refresh");

    if (
      status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !isAuthRequest
    ) {
      originalRequest._retry = true;

      if (!tokenStorage.getRefreshToken()) {
        tokenStorage.clearTokens();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
      }

      const newToken = await refreshPromise;
      if (newToken) {
        originalRequest.headers = originalRequest.headers ?? {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api.request(originalRequest);
      }

      tokenStorage.clearTokens();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
export { plainApi };
