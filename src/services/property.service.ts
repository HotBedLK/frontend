import type { Property } from "../types/property.types";
import api from "./api";

export const getProperties = async (): Promise<Property[]> => {
  const response = await api.get<Property[]>("/properties");
  return response.data;
};
