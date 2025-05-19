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
    <div className="flex flex-col bg-[url(/src/assets/images/main_car.png)] bg-blend-color-dodge bg-cover bg-center col-span-7 row-span-9 md:row-span-6 bg-black-medium md:bg-gradient-to-l md:from-60% md:from-white md:to-60% md:to-black">
      <Header />
      {widthScreen > 425 ? <Main data={DATA} /> : <MainMobile data={DATA} />}
    </div>
  );
}
