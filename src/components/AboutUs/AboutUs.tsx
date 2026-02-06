import { type ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import carImage from "../../assets/images/car_orange.png";
import type { DATA_ABOUTUS } from "@/model/types/DataAboutUsType";
import { motion } from "motion/react";
import useWindowWidth from "../../hooks/useWindowWidth";
import AboutContent from "./AboutContent";

const styles = {
  section:
    "flex flex-col justify-around lg:justify-center h-full w-full max-lg:bg-black-medium row-span-3 lg:row-span-5 col-span-7 lg:col-start-2 lg:col-end-7",
  div: "flex flex-col items-center justify-center lg:gap-y-10",
};
const animateOptions = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1.3 },
};

type AboutUsProps = {
  dataAbout: DATA_ABOUTUS;
  title: string;
};

export default function AboutUs({
  dataAbout,
  title,
}: AboutUsProps): ReactElement {
  const screenWidth: number = useWindowWidth();
  return (
    <motion.section {...animateOptions} className={styles.section}>
      <div className={styles.div}>
        <TitleSection white={screenWidth < 1024} text={title} />
        <AboutContent carImage={carImage} dataAbout={dataAbout} />
      </div>
    </motion.section>
  );
}
