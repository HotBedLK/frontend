const SearchCard = () => (
  <div className="mt-6 flex justify-center sm:mt-8">
    <form className="w-full max-w-4xl rounded-xl border border-gray-100 bg-white/95 p-4 shadow-xl mb-10 mt-5 sm:mt-10 backdrop-blur-sm sm:-translate-y-8 sm:p-6 grid grid-cols-1 gap-3 items-center sm:grid-cols-8 animate-fadeIn">
      <div className="sm:col-span-3">
        <label className="sr-only">Location</label>
        <input
          aria-label="Location"
          name="location"
          placeholder="Location"
          className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="sm:col-span-3">
        <label className="sr-only">Type</label>
        <input
          aria-label="Type"
          name="type"
          placeholder="Type (e.g. Single, Double, Room)"
          className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="sm:col-span-2 flex justify-center gap-2 sm:justify-end">
        <button
          type="submit"
          className="w-full sm:w-auto rounded-lg bg-[var(--primary-color)] px-10 py-2 font-semibold text-white hover:bg-[var(--hover-primary)] cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  </div>
);

const HowWeWork = () => (
  <section className="sm:pt-6 sm:mt-12">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`bg-[var(--background-green)] text-white rounded-lg p-8 shadow-md text-center`}
      >
        <h2 className="text-3xl font-bold">How We Work ?</h2>
        <p className="mt-3 text-sm leading-relaxed px-0 sm:px-12">
          At Hotbed.lk, we make finding and managing boarding places simple and
          efficient. Seekers can quickly find properties with real-time
          availability and advanced filters, while owners can manage listings
          without repeated posts. Our platform saves time, reduces frustration,
          and ensures reliable, up-to-date information—creating a seamless
          experience for everyone.
        </p>
      </div>
    </div>
  </section>
);

export default function HeroSearch() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/banners/landing-p-hero-01.png"
          alt="hero"
          className="h-[360px] w-full rounded-b-2xl object-cover brightness-75 sm:h-[520px] lg:h-[600px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-16 sm:pb-20">
          <div className="mb-6 text-center text-white">
            <h1 className="text-2xl font-extrabold leading-tight sm:text-4xl">
              Find comfortable boarding places near you
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-xs text-gray-200 sm:max-w-2xl sm:text-base">
              Search, compare and contact owners quickly with real-time
              availability and filters.
            </p>
          </div>
          {/* search card */}
          <SearchCard />

          {/* HowWeWork */}
          <HowWeWork />
        </div>
      </div>
    </section>
  );
}
