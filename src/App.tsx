import AboutUs from "./components/AboutUs/AboutUs";
import BookNow from "./components/Book/BookNow";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";
import PremiumServices from "./components/PremiumServices/PremiumServices";
import Presentation from "./components/Presentation/Presentation";
import allDataCars from "./data/dataCarAd";

export default function App() {
  return (
    <div className="grid grid-cols-7 grid-rows-20 gap-y-15 justify-between w-screen h-full">
      <Presentation />
      <AboutUs />
      <BookNow />
      <FeaturedCars allCars={allDataCars} />
      <PremiumServices />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
