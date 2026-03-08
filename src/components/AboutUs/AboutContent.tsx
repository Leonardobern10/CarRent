import type { DATA_ABOUTUS } from "@/model/types/DataAboutUsType";
import { motion } from "motion/react";
import AboutDescription from "./AboutDescription";
import ButtonDefault from "../shared/ButtonDefault";
import { useNavigate, type NavigateFunction } from "react-router";
import AboutImage from "./AboutImage";

type AboutContentProps = {
  carImage: string;
  dataAbout: DATA_ABOUTUS;
};

const animateProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { ease: "backInOut", duration: 1.3 },
};

const buttonProps = (navigate: NavigateFunction) => ({
  buttonName: "Leia mais",
  width: "1/2",
  fontSize: "sm",
  weight: "normal",
  clickEvent: () => navigate("sobre"),
});

const styles = {
  container:
    "w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-x-16 gap-y-10 mt-8",
  containerText:
    "flex flex-col justify-between w-5/7 lg:w-1/2 max-lg:items-center h-fit gap-y-5",
};

export default function AboutContent({
  carImage,
  dataAbout,
}: AboutContentProps) {
  const navigate = useNavigate();
  return (
    <motion.div {...animateProps} className={styles.container}>
      <AboutImage carImage={carImage} alt="Carro laranja estilizado" />
      <div className={styles.containerText}>
        <AboutDescription data={dataAbout} />
        <ButtonDefault {...buttonProps(navigate)} />
      </div>
    </motion.div>
  );
}
