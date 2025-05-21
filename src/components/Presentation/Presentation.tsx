import { useEffect, useState, type ReactElement } from "react";
import Header from "./Header";
import Main from "./Main";
import { DATA } from "../../data/dataPresentation";
import MainMobile from "./MainMobile";

export default function Presentation(): ReactElement {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [widthScreen]);

  return (
    <div className="flex flex-col bg-[url(car_orange.png)] bg-blend-color-dodge bg-cover bg-center col-span-7 row-span-3 md:row-span-3 lg:row-span-6 bg-black-medium lg:bg-gradient-to-l lg:from-60% lg:from-white lg:to-60% lg:to-black">
      <Header />
      {widthScreen > 1024 ? <Main data={DATA} /> : <MainMobile data={DATA} />}
    </div>
  );
}
