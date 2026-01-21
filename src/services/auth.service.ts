import api from "./api";

export const loginRequest = async (data: {
  phone: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const registerRequest = async (data: {
  first_name: String;
  last_name: String;
  password: String;
  mobile_number: String;
  email: String;
}) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};
