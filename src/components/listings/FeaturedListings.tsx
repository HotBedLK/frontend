import { useProperties } from "../../hooks/useProperties";
import PropertyCard from "../cards/PropertyCard/PropertyCard";
import { ErrorState, LoadingState } from "../feedback";

export default function FeaturedListings() {
  const { properties, loading, error } = useProperties();

  if (loading) {
    return <LoadingState message="Fetching featured listings..." />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={() => {}} />;
  }

  return (
    <section className="relative mt-16 pb-12 overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 right-[-10%] h-64 w-64 rounded-full bg-gradient-to-br from-[var(--listing-glow)] via-[var(--listing-sand)] to-transparent opacity-70 blur-3xl" />
        <div className="absolute bottom-[-25%] left-[-8%] h-72 w-72 rounded-full bg-gradient-to-br from-[var(--listing-mint)] via-white to-transparent opacity-70 blur-3xl" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <p className="font-body text-xs uppercase tracking-[0.35em] text-[var(--listing-clay)]">
              Featured listings
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl text-[var(--listing-ink)]">
              Some stays worth a closer look
            </h2>
            <p className="font-body mt-2 max-w-xl text-sm text-[var(--listing-ink-muted)]">
              A few hand-picked options with clear pricing and live
              availability.
            </p>
          </div>

          <button className="font-body inline-flex items-center gap-2 rounded-full border border-[var(--listing-line)] bg-white px-5 py-2 text-sm hover:cursor-pointer text-[var(--listing-ink)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            View all listings
            <span aria-hidden="true">-&gt;</span>
          </button>
        </div>

        <div className="relative mt-10 -mx-4 border-y border-[var(--listing-line)] bg-[var(--listing-sand)] py-8 shadow-[0_24px_60px_-40px_rgba(25,20,15,0.5)] sm:-mx-6 lg:-mx-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
