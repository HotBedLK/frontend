import type { Property } from "../../../types/property.types";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const getStatusClass = (status: string) => {
  const normalized = status.trim().toLowerCase();

  if (normalized === "not available") {
    return "text-red-600";
  }
  if (normalized === "about to available") {
    return "text-orange-500";
  }
  return "text-emerald-600";
};

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  return (
    <article
      className="rise-in flex h-full flex-col rounded-xl border border-[var(--listing-line)] bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-4"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="h-36 w-full object-cover sm:h-48"
        />
      </div>

      {/* Dots */}
      <div className="mt-2 flex justify-center gap-1.5 sm:mt-3 sm:gap-2">
        <span className="h-1 w-1 rounded-full bg-gray-400 sm:h-1.5 sm:w-1.5" />
        <span className="h-1 w-1 rounded-full bg-gray-300 sm:h-1.5 sm:w-1.5" />
        <span className="h-1 w-1 rounded-full bg-gray-300 sm:h-1.5 sm:w-1.5" />
      </div>

      {/* Content */}
      <div className="mt-3 flex flex-1 flex-col sm:mt-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-sm text-[var(--listing-ink)] sm:text-lg">
            {property.title}
          </h3>
          <span
            className={`font-body text-[10px] font-semibold sm:text-xs ${getStatusClass(
              property.status
            )}`}
          >
            {property.status}
          </span>
        </div>

        <p className="font-body mt-1 text-xs text-[var(--listing-ink-muted)] sm:mt-2 sm:text-sm">
          {property.location}
        </p>

        <p className="font-body mt-1 mb-6 text-xs text-[var(--listing-ink)] sm:mt-2 sm:text-sm">
          {property.price}
        </p>

        <button className="font-body mt-auto w-full rounded-md bg-[#4a4966] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#3d3c5a] sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm">
          View
        </button>
      </div>
    </article>
  );
};

export default PropertyCard;
