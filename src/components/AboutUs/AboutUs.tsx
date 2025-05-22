import { useEffect, useState, type ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";

import AboutDescription from "./AboutDescription";
import TitleSection from "../TitleSection";
import carImage from "../../assets/images/car_orange.png";
import type { DATA_ABOUTUS } from "@/model/DataAboutUsType";
import { motion } from "motion/react";

export default function AboutUs(props: {
  dataAbout: DATA_ABOUTUS;
}): ReactElement {
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
    <motion.section
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "backOut", duration: 1.3 }}
      className="flex flex-col justify-around lg:justify-center h-full w-full max-lg:bg-black-medium row-span-2 lg:row-span-5 col-span-7 lg:col-start-2 lg:col-end-7"
    >
      <div className="flex flex-col items-center justify-center lg:gap-y-10">
        <TitleSection white={windowWidth < 1024} text="Sobre nós" />
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-x-16 gap-y-10 mt-8">
          <div className="h-full w-1/2 max-lg:hidden">
            <img src={carImage} alt="" className="rounded-lg" />
          </div>
          <div className="flex flex-col justify-between w-5/7 lg:w-1/2 max-lg:items-center h-fit gap-y-8">
            <AboutDescription value={props.dataAbout} />
            <ButtonDefault
              buttonName="Leia mais"
              width="1/2"
              fontSize="sm"
              weight="normal"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
