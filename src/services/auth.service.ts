import api from "./api";

export const loginRequest = async (data: {
  phone: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};
