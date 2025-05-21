import { useEffect, useState, type ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";
import { dataAbout } from "../../data/dataAboutUs";
import AboutDescription from "./AboutDescription";
import TitleSection from "../TitleSection";

export default function AboutUs(): ReactElement {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <section className="flex flex-col justify-around md:justify-center h-full w-full max-md:bg-black-medium row-span-2 md:row-span-5 col-span-7 md:col-start-2 md:col-end-7">
      <div className="flex flex-col items-center justify-center md:gap-y-10">
        <TitleSection white={windowWidth < 768} text="About Us" />
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-x-16 gap-y-10 mt-8">
          <div className="h-full w-fit max-md:hidden">
            <img
              src="src/assets/images/car_orange.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-3/4 max-md:items-center h-fit gap-y-8">
            <AboutDescription value={dataAbout} />
            <ButtonDefault
              buttonName="Read more"
              width="1/2"
              fontSize="sm"
              weight="normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
