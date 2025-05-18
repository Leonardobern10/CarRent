import AboutUs from "./components/AboutUs/AboutUs";
import BookNow from "./components/Book/BookNow";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import PremiumServices from "./components/PremiumServices/PremiumServices";
import Presentation from "./components/Presentation/Presentation";
import Rating from "./components/Rating/Rating";
import allDataCars from "./data/dataCarAd";

export default function App() {
  return (
    <div className="grid grid-cols-7 grid-rows-[repeat(41,_80px)] md:grid-rows-[repeat(41,_100px)] justify-between bg-linear-to-b from-90% from-white to-90% to-black-medium  h-full w-full gap-y-8 content-center scroll-smooth">
      <Presentation />
      {/*
      <AboutUs />
            {/*
      <BookNow />
      <FeaturedCars allCars={allDataCars} />
      <PremiumServices />
      <Rating />
      <Info />
      <ContactUs />
      <Footer />
      */}
    </div>
  );
}
