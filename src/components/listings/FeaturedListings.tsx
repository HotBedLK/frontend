const listings = [
  {
    id: "nawala-home",
    title: "Annex",
    status: "Available",
    location: "Nawala, Nugegoda, Sri Lanka",
    price: "Rs.1500000.00",
    image: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "kandy-home",
    title: "Home",
    status: " Not Available",
    location: "Kandy, Sri Lanka",
    price: "Rs.950000.00",
    image: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "galle-home",
    title: "Apartment",
    status: "Available",
    location: "Galle, Sri Lanka",
    price: "Rs.1200000.00",
    image: "/images/banners/landing-p-hero-01.png",
  },
  {
    id: "galle-home",
    title: "Home",
    status: "About to Available",
    location: "Galle, Sri Lanka",
    price: "Rs.1200000.00",
    image: "/images/banners/landing-p-hero-01.png",
  },
];

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

export default function FeaturedListings() {
  return (
    <section className="relative mt-16 pb-12">
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

        <div className="relative left-1/2 right-1/2 mt-10 w-screen -ml-[50vw] -mr-[50vw] border-y border-[var(--listing-line)] bg-[var(--listing-sand)] py-8 shadow-[0_24px_60px_-40px_rgba(25,20,15,0.5)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3">
              {listings.map((listing, index) => (
                <article
                  key={listing.id}
                  className="rise-in flex h-full flex-col rounded-xl border border-[var(--listing-line)] bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-4"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="overflow-hidden rounded-">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="h-36 w-full object-cover sm:h-48"
                    />
                  </div>

                  <div className="mt-2 flex justify-center gap-1.5 sm:mt-3 sm:gap-2">
                    <span className="h-1 w-1 rounded-full bg-gray-400 sm:h-1.5 sm:w-1.5" />
                    <span className="h-1 w-1 rounded-full bg-gray-300 sm:h-1.5 sm:w-1.5" />
                    <span className="h-1 w-1 rounded-full bg-gray-300 sm:h-1.5 sm:w-1.5" />
                  </div>

                  <div className="mt-3 flex flex-1 flex-col sm:mt-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-sm text-[var(--listing-ink)] sm:text-lg">
                        {listing.title}
                      </h3>
                      <span
                        className={`font-body text-[10px] font-semibold sm:text-xs ${getStatusClass(
                          listing.status
                        )}`}
                      >
                        {listing.status}
                      </span>
                    </div>

                    <p className="font-body mt-1 text-xs text-[var(--listing-ink-muted)] sm:mt-2 sm:text-sm">
                      {listing.location}
                    </p>
                    <p className="font-body mt-1 mb-6 text-xs text-[var(--listing-ink)] sm:mt-2 sm:text-sm">
                      {listing.price}
                    </p>

                    <button className="font-body mt-auto w-full rounded-md bg-[#4a4966] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#3d3c5a] hover:cursor-pointer sm:rounded-lg sm:px-4 sm:py-2 sm:text-sm">
                      View
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
