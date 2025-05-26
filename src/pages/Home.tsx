import AboutUs from "../components/AboutUs/AboutUs";
import BookNow from "../components/Book/BookNow";
import ContactUs from "../components/ContactUs/ContactUs";
import FeaturedCars from "../components/FeaturedCars/FeaturedCars";
import Info from "../components/Info/Info";
import PremiumServices from "../components/PremiumServices/PremiumServices";
import Presentation from "../components/Presentation/Presentation";
import { dataAbout } from "../data/dataAboutUs";
import { cities, carTypes, allDataCars } from "../data/dataCarAd";
import { dataInfo } from "../data/dataInfo";
import { textServices, allServices } from "../data/dataPremmiumServices";
import { DATA } from "../data/dataPresentation";

export default function Home() {
  return (
    <div className="grid grid-cols-7 grid-rows-[repeat(30,200px)] lg:grid-rows-[repeat(30,_100px)] justify-between items-stretch bg-linear-to-b from-90% from-white to-90% to-black-medium  h-full w-dvw lg:gap-y-8 content-center scroll-smooth">
      <Presentation data={DATA} />
      <AboutUs dataAbout={dataAbout} title="Sobre nós" />
      <BookNow cities={cities} carTypes={carTypes} />
      <FeaturedCars allCars={allDataCars} />
      <PremiumServices text={textServices} services={allServices} />
      <Info allInfo={dataInfo} />
      <ContactUs title="Contate-nos" />
    </div>
  );
}
