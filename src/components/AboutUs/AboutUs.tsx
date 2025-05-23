import { type ReactElement } from "react";
import ButtonDefault from "../shared/ButtonDefault";

import AboutDescription from "./AboutDescription";
import TitleSection from "../shared/TitleSection";
import carImage from "../../assets/images/car_orange.png";
import type { DATA_ABOUTUS } from "@/model/types/DataAboutUsType";
import { motion } from "motion/react";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function AboutUs(props: {
  dataAbout: DATA_ABOUTUS;
  title: string;
}): ReactElement {
  const screenWidth: number = useWindowWidth();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="flex flex-col justify-around lg:justify-center h-full w-full max-lg:bg-black-medium row-span-3 lg:row-span-5 col-span-7 lg:col-start-2 lg:col-end-7"
    >
      <div className="flex flex-col items-center justify-center lg:gap-y-10">
        <TitleSection white={screenWidth < 1024} text={props.title} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "backInOut", duration: 1.3 }}
          className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-x-16 gap-y-10 mt-8"
        >
          <div className="h-full w-1/2 max-lg:hidden">
            <img
              src={carImage}
              alt="Carro laranja estilizado"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-5/7 lg:w-1/2 max-lg:items-center h-fit gap-y-5">
            <AboutDescription data={props.dataAbout} />
            <ButtonDefault
              buttonName="Leia mais"
              width="1/2"
              fontSize="sm"
              weight="normal"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
