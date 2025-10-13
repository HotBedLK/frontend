// import custom component
import Header from "./components/Header.jsx";
import HeroSearch from "./components/HeroSearch.jsx";
import StepsCard from "./components/StepsCard.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        {/* for main sectons */}
        <HeroSearch />
        <StepsCard />
      </main>
    </div>
  );
}
