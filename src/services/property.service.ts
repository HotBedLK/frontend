import type { Property } from "../types/property.types";
import api from "./api";

type DemoImage = { id: string; image: string };
type DemoProperty = {
  id: string;
  property_type: string;
  price: number;
  location_name: string;
  Images: DemoImage[];
};
type DemoResponse = {
  succuss: boolean;
  status: number;
  message: string;
  total_available_properties: number;
  properties: DemoProperty[];
};

const DEFAULT_IMAGE = "/images/banners/landing-p-hero-01.png";

const getImageUrl = (imageId?: string) => {
  if (!imageId) {
    return DEFAULT_IMAGE;
  }
  const baseUrl =
    import.meta.env.VITE_IMAGE_BASE_URL ?? import.meta.env.VITE_API_URL;
  const normalizedBase = baseUrl.replace(/\/$/, "");
  return `${normalizedBase}/${imageId}`;
};

const mapDemoProperty = (item: DemoProperty): Property => ({
  id: item.id,
  title: item.property_type,
  location: item.location_name,
  price: item.price,
  status: "Available",
  imageUrl: getImageUrl(item.Images?.[0]?.image),
});

const fetchLandingProperties = async (): Promise<Property[]> => {
  const res = await api.get<DemoResponse>("/general/landing-feed");
  return (res.data.properties ?? []).map(mapDemoProperty);
};

export const getlandingProperties = fetchLandingProperties;
export const getProperties = fetchLandingProperties;


