import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import { motion } from "motion/react";
import type { ReactElement } from "react";
import ButtonDefault from "../shared/ButtonDefault";
import ContainerIconsNetwork from "./ContainerIconsNetwork";
import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MainMobile(props: {
  data: DATA_PRESENTATION;
}): ReactElement {
  const icons: Array<IconType> = [
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaWhatsapp,
    FaLinkedinIn,
    FaTelegramPlane,
  ];
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="flex flex-col justify-between items-center h-screen font-montserrat"
    >
      <div className="flex flex-col gap-y-5 mt-10 w-7/8 sm:items-center">
        <h1 className="text-2xl sm:text-4xl sm:w-5/6 md:w-5/6 lg:text-2xl text-start sm:text-center md:text-start text-white-dark/80 text-shadow-sm text-shadow-black/50">
          {props.data.MAIN_TEXT}
        </h1>
        <h3 className="text-sm lg:text-lg lg:text-start sm:w-1/3 md:w-5/6 text-white-dark/80 text-shadow-sm text-shadow-black/50 sm:text-shadow-black md:text-shadow-black/50">
          {props.data.SUBTITTLE}
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center h-1/3 w-full gap-y-10 opacity-60">
        <ButtonDefault
          width="1/2"
          fontSize="md"
          weight="normal"
          buttonName="Saiba mais"
        />
        <ContainerIconsNetwork icons={icons} />
      </div>
    </motion.main>
  );
}
