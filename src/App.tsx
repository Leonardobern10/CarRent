import AboutUs from "./components/AboutUs/AboutUs";
import BookNow from "./components/Book/BookNow";
import ContactUs from "./components/ContactUs/ContactUs";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import PremiumServices from "./components/PremiumServices/PremiumServices";
import Presentation from "./components/Presentation/Presentation";
import Rating from "./components/Rating/Rating";
import { allDataCars, carTypes, cities } from "./data/dataCarAd";
import { DATA } from "./data/dataPresentation";
import { dataAbout } from "./data/dataAboutUs";
import { allServices, textServices } from "./data/dataPremmiumServices";
import dataRating from "./data/dataRating";
import { dataInfo } from "./data/dataInfo";
import { dataContact } from "./data/dataContact";
import { dataNavBarItems } from "./data/dataNavBarItems";

export default function App() {
  return (
    <div className="grid grid-cols-7 grid-rows-[repeat(30,200px)] lg:grid-rows-[repeat(41,_100px)] justify-between items-stretch bg-linear-to-b from-90% from-white to-90% to-black-medium  h-full w-dvw lg:gap-y-8 content-center scroll-smooth">
      <Presentation data={DATA} navBarItems={dataNavBarItems} />
      <AboutUs dataAbout={dataAbout} title="About Us" />
      <BookNow cities={cities} carTypes={carTypes} />
      <FeaturedCars allCars={allDataCars} />
      <PremiumServices text={textServices} services={allServices} />
      <Rating data={dataRating} />
      <Info allInfo={dataInfo} />
      <ContactUs title="Contact Us" />
      <Footer dataContact={dataContact} />
    </div>
  );
}
