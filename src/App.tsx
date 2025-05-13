import AboutUs from "./components/AboutUs/AboutUs";
import BookNow from "./components/Book/BookNow";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars";
import Presentation from "./components/Presentation/Presentation";

export default function App() {
  return (
    <div className="grid grid-cols-7 grid-rows-20 gap-y-15 justify-between w-screen h-full">
      <Presentation />
      <AboutUs />
      <BookNow />
      <FeaturedCars />
      <div></div>
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
