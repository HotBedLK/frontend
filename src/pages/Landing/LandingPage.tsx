// import custom component

import StepsCard from "../../components/cards/StepsCard";
import FAQ from "../../components/faq/FAQ";
import HeroSearch from "../../components/search/HeroSearch";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <HeroSearch />
        <StepsCard />
        <FAQ />
      </main>
    </div>
  );
}
