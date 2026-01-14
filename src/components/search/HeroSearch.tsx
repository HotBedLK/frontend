const SearchCard = () => (
  <div className="mt-8 flex justify-center">
    <form className="w-full max-w-4xl transform -translate-y-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 p-6 grid grid-cols-1 sm:grid-cols-8 gap-3 items-center animate-fadeIn">
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
          className={`px-10 py-2 rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--hover-primary)] cursor-pointer`}
        >
          Search
        </button>
      </div>
    </form>
  </div>
);

const HowWeWork = () => (
  <section className="sm:pt-6">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`bg-[var(--background-green)] text-white rounded-lg p-8 shadow-md text-center`}
      >
        <h2 className="text-3xl font-bold">How We Work ?</h2>
        <p className="mt-3 text-sm leading-relaxed px-12">
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
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 ">
        <img
          src="/images/banners/landing-p-hero-01.png"
          alt="hero"
          className="w-full h-105 object-cover brightness-75 rounded-b-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX: sm:pb-28 */}
        <div className="pt-16 pb-20 sm:pt-12 sm:pb-10">
          <div className="text-center text-white mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Find comfortable boarding places near you
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-2xl mx-auto mb-10">
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
