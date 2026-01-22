import { useEffect, useState } from "react";
// import { getProperties } from "../services/property.service";
import type { Property } from "../types/property.types";

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // const data = await getProperties();
        // testing data only **************
        setProperties([
<<<<<<< HEAD
=======
          {
            id: "nawala-annex",
            title: "Annex",
            status: "Available",
            location: "Nawala, Nugegoda, Sri Lanka",
            price: "Rs.1500000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "kandy-home",
            title: "Home",
            status: "Not Available",
            location: "Kandy, Sri Lanka",
            price: "Rs.950000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "galle-apartment",
            title: "Apartment",
            status: "Available",
            location: "Galle, Sri Lanka",
            price: "Rs.1200000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "galle-home",
            title: "Home",
            status: "About to Available",
            location: "Galle, Sri Lanka",
            price: "Rs.1200000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "colombo-studio",
            title: "Studio",
            status: "Available",
            location: "Colombo, Sri Lanka",
            price: "Rs.1850000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "nugegoda-room",
            title: "Room",
            status: "Available",
            location: "Nugegoda, Sri Lanka",
            price: "Rs.650000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "jaffna-annex",
            title: "Annex",
            status: "Not Available",
            location: "Jaffna, Sri Lanka",
            price: "Rs.900000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "negombo-home",
            title: "Home",
            status: "Available",
            location: "Negombo, Sri Lanka",
            price: "Rs.1100000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "kandy-apartment",
            title: "Apartment",
            status: "About to Available",
            location: "Kandy, Sri Lanka",
            price: "Rs.1350000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "galle-room",
            title: "Room",
            status: "Available",
            location: "Galle, Sri Lanka",
            price: "Rs.720000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "colombo-apartment",
            title: "Apartment",
            status: "Not Available",
            location: "Colombo 07, Sri Lanka",
            price: "Rs.2100000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
          {
            id: "kotte-home",
            title: "Home",
            status: "Available",
            location: "Sri Jayawardenepura Kotte, Sri Lanka",
            price: "Rs.1700000.00",
            imageUrl: "/images/banners/landing-p-hero-01.png",
          },
>>>>>>> origin/development
        ]);
        // setProperties(data);
      } catch (err) {
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, loading, error };
};
