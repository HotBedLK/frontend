import { FaUserCircle } from "react-icons/fa";
import type { Property } from "../../../types/property.types";
import PropertyCard from "../../cards/PropertyCard/PropertyCard";

const dummyProperties: Property[] = [
  {
    id: "annex-01",
    title: "Annex",
    status: "Available",
    location: "Nawala, Nugegoda",
    price: 30000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "apartment-01",
    title: "Apartment",
    status: "Available",
    location: "Kandy",
    price: 85000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "house-01",
    title: "House",
    status: "Not Available",
    location: "Colombo",
    price: 120000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "house-02",
    title: "House",
    status: "Available",
    location: "Galle",
    price: 65000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "annex-02",
    title: "Annex",
    status: "Available",
    location: "Nugegoda",
    price: 28000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "apartment-02",
    title: "Apartment",
    status: "Available",
    location: "Rajagiriya",
    price: 95000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "apartment-03",
    title: "Apartment",
    status: "Available",
    location: "Kotte",
    price: 78000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "annex-03",
    title: "Annex",
    status: "Not Available",
    location: "Homagama",
    price: 32000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "house-03",
    title: "House",
    status: "Available",
    location: "Negombo",
    price: 110000,
    imageUrl: "/images/banners/landing-p-hero-01.png",
  },
];

const propertyTypes = ["Annex", "Apartment", "House", "Room", "Studio"];
const availabilityOptions = ["Available", "Not Available"];
const featureOptions = ["Parking", "Balcony", "Garden", "Wi-Fi"];
const bedOptions = ["Single", "Double", "Triple"];
const otherOptions = ["Furnished", "A/C", "Kitchen", "Pet friendly"];
const pages = [1, 2, 3, 4, 5, 6];

type FilterGroupProps = {
  title: string;
  options: string[];
};

const FilterGroup = ({ title, options }: FilterGroupProps) => (
  <div className="space-y-2">
    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-600">
      {title}
    </p>
    <div className="space-y-1">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 text-xs text-gray-700"
        >
          <input
            type="checkbox"
            className="h-3 w-3 rounded border-gray-300"
            style={{ accentColor: "var(--primary-color)" }}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export default function Feed() {
  return (
    <section className="min-h-screen bg-[var(--background-green)]">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] w-full">
        <div className="flex w-full flex-col overflow-hidden bg-white shadow-lg">
          <div className="grid flex-1 min-h-0 gap-6 px-6 py-6 lg:grid-cols-[250px_1fr] lg:items-stretch">
            <aside className="space-y-5 rounded-xl border border-[#f2d9d9] bg-[#f9eeee] p-4 lg:sticky lg:top-24">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
                  Filters
                </span>
                {/* <span className="h-px flex-1 bg-[#e7cfcf]" /> */}
              </div>

              <FilterGroup title="Property Type" options={propertyTypes} />
              <FilterGroup title="Availability" options={availabilityOptions} />

              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                  Price Range
                </p>
                <input
                  type="range"
                  min={0}
                  max={150000}
                  defaultValue={65000}
                  className="w-full"
                  style={{ accentColor: "var(--primary-color)" }}
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>0</span>
                  <span>150k+</span>
                </div>
              </div>

              <FilterGroup title="Features" options={featureOptions} />
              <FilterGroup title="Beds" options={bedOptions} />
              <FilterGroup title="Others" options={otherOptions} />
            </aside>

            <main className="flex min-h-0 flex-col">
              <div className="mb-4 flex items-center justify-center gap-3 text-sm font-semibold text-[var(--listing-ink)]">
                <span className="h-px w-10 bg-[var(--listing-line)]" />
                <span className="whitespace-nowrap">Featured Properties</span>
                <span className="h-px w-10 bg-[var(--listing-line)]" />
              </div>

              <div className="flex-1 min-h-0 lg:overflow-y-auto lg:pr-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {dummyProperties.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 border-t border-[var(--listing-line)] pt-3 flex items-center justify-center gap-2 text-xs">
                {pages.map((page) => {
                  const isActive = page === 1;
                  return (
                    <button
                      key={page}
                      type="button"
                      className={`h-7 w-7 rounded-full border font-semibold transition ${
                        isActive
                          ? "border-[var(--primary-color)] bg-[var(--primary-color)] text-white"
                          : "border-[#e7dede] bg-white text-gray-600 hover:-translate-y-0.5 hover:shadow-sm"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
