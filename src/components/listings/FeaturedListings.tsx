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

          <button className="font-body inline-flex items-center gap-2 rounded-full border border-[var(--listing-line)] bg-white px-5 py-2 text-sm text-[var(--listing-ink)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            View all listings
            <span aria-hidden="true">-&gt;</span>
          </button>
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--listing-line)] bg-[var(--listing-sand)] p-6 shadow-[0_24px_60px_-40px_rgba(25,20,15,0.5)] sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {listings.map((listing, index) => (
              <article
                key={listing.id}
                className="rise-in rounded-2xl border border-[var(--listing-line)] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-48 w-full object-cover"
                  />
                </div>

                <div className="mt-3 flex justify-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg text-[var(--listing-ink)]">
                      {listing.title}
                    </h3>
                    <span
                      className={`font-body text-xs font-semibold ${getStatusClass(
                        listing.status
                      )}`}
                    >
                      {listing.status}
                    </span>
                  </div>

                  <p className="font-body mt-2 text-sm text-[var(--listing-ink-muted)]">
                    {listing.location}
                  </p>
                  <p className="font-body mt-2 text-sm text-[var(--listing-ink)]">
                    {listing.price}
                  </p>

                  <button className="font-body mt-5 w-full rounded-lg bg-[#4a4966] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d3c5a] hover:cursor-pointer">
                    View
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
