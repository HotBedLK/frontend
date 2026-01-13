// import custom component

import StepsCard from "../../components/cards/StepsCard";
import FAQ from "../../components/faq/FAQ";
import FeaturedListings from "../../components/listings/FeaturedListings";
import HeroSearch from "../../components/search/HeroSearch";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <HeroSearch />
        <StepsCard />
        <FeaturedListings />
        <FAQ />
      </main>
    </div>
  );
}
