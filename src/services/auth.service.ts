import api from "./api";

export const loginRequest = async (data: {
  phone: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const registerRequest = async (data: {
  first_name: string;
  last_name: string;
  password: string;
  mobile_number: string;
  email: string;
}) => {
  const res = await api.post("/auth/", data);
  return res.data;
};

export const verifyPhoneRequest = async (data: {
  email?: string | null;
  mobile_number?: string | null;
  otp: string;
}) => {
  const res = await api.post("/auth/verify", data);
  return res.data;
};

export const resendOtpRequest = async (data: {
  email?: string | null;
  mobile_number?: string | null;
}) => {
  const res = await api.post("/auth/resend-otp", data);
  return res.data;
};
