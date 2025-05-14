import AboutUs from "./components/AboutUs/AboutUs";
import BookNow from "./components/Book/BookNow";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";
import Info from "./components/Info/Info";
import PremiumServices from "./components/PremiumServices/PremiumServices";
import Presentation from "./components/Presentation/Presentation";
import Rating from "./components/Rating/Rating";
import allDataCars from "./data/dataCarAd";

export default function App() {
  return (
    <div className="grid grid-cols-7 grid-rows-[repeat(45,_100px)] justify-between h-full">
      <Presentation />
      <AboutUs />
      <BookNow />
      <FeaturedCars allCars={allDataCars} />
      <PremiumServices />
      <Rating />
      <Info />
      <ContactUs />
    </div>
  );
}
