import { useEffect, useState } from "react";
import { getProperties } from "../services/property.service";
import type { Property } from "../types/property.types";

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        // testing data only **************
        setProperties([
          {
            id: "nawala-home",
            title: "Annex",
            status: "Available",
            location: "Nawala, Nugegoda, Sri Lanka",
            price: "Rs.1500000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "kandy-home1",
            title: "Home",
            status: " Not Available",
            location: "Kandy, Sri Lanka",
            price: "Rs.950000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "galle-home11",
            title: "Apartment",
            status: "Available",
            location: "Galle, Sri Lanka",
            price: "Rs.1200000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "galle-home2",
            title: "Home",
            status: "About to Available",
            location: "Galle, Sri Lanka",
            price: "Rs.1200000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
        ]);
        // setProperties(data);
      } catch (err) {
      } finally {
        setError("Failed to load properties");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, loading, error };
};
