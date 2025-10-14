// import custom component

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSearch from "./components/HeroSearch";
import StepsCard from "./components/StepsCard";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* for main sectons */}
        <HeroSearch />
        <StepsCard />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
