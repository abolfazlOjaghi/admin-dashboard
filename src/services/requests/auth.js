import apiRequests from "../config/axios";

export const loginRequest = async (userData) => {
  const { data } = await apiRequests.post("/auth/login", {...userData, expiresInMins: 1});
  return data;
};
export const getMe = async () => {
  const { data } = await apiRequests.get("/auth/me");
  return data;
};
export const refreshAccessToken = async (refreshToken) => {
  const { data } = await apiRequests.post("/auth/refresh", { refreshToken });
  return data;
};
