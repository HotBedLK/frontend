import { useEffect, useMemo, useRef, useState } from "react";
import { useProperties } from "../../hooks/useProperties";
import PropertyCard from "../cards/PropertyCard/PropertyCard";
import ErrorState from "../state/ErrorState";
import LoadingState from "../loading/LoadingState";

const PAGE_SIZE = 6;
const PAGE_LOAD_DELAY_MS = 2000;

export default function FeaturedListings() {
  const { properties, loading, error } = useProperties();
  const [page, setPage] = useState(1);
  const [pendingPage, setPendingPage] = useState<number | null>(null);
  const [pageLoading, setPageLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  const totalPages = Math.max(1, Math.ceil(properties.length / PAGE_SIZE));
  const pagedProperties = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return properties.slice(startIndex, startIndex + PAGE_SIZE);
  }, [page, properties]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (pendingPage === null) {
      return;
    }

    setPageLoading(true);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setPage(pendingPage);
      setPendingPage(null);
      setPageLoading(false);
      timerRef.current = null;
    }, PAGE_LOAD_DELAY_MS);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [pendingPage]);

  if (loading) {
    return <LoadingState message="Fetching featured listings..." />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={() => {}} />;
  }

  const handlePageChange = (nextPage: number) => {
    if (nextPage === page || pageLoading) {
      return;
    }
    setPendingPage(nextPage);
  };

  return (
    <section className="relative mt-16 pb-12 overflow-y-hidden overflow-x-hidden">
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
      </div>

      <div className="relative mt-10 border-y border-[var(--listing-line)] bg-[var(--listing-sand)] py-8 shadow-[0_24px_60px_-40px_rgba(25,20,15,0.5)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          {pageLoading ? (
            <div className="min-h-[360px]">
              <LoadingState message="Loading listings..." />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
              {pagedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === page;
            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => handlePageChange(pageNumber)}
                disabled={pageLoading}
                aria-current={isActive ? "page" : undefined}
                className={`h-9 w-9 rounded-full border text-sm font-semibold transition ${
                  isActive
                    ? "border-[var(--primary-color)] bg-[var(--primary-color)] text-white"
                    : "border-[var(--listing-line)] bg-white text-[var(--listing-ink)] hover:-translate-y-0.5 hover:shadow-md"
                } ${pageLoading ? "cursor-not-allowed opacity-70" : ""}`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
