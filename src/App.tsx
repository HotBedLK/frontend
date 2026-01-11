// import custom component

import FAQ from "./components/faq/FAQ";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Navbar/Header";
import HeroSearch from "./components/search/HeroSearch";
import StepsCard from "./components/cards/StepsCard";

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
