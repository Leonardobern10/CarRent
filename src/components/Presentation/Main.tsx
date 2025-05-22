import type { ReactElement } from "react";
import VerticalLine from "./VerticalLine";
import ButtonDefault from "../shared/ButtonDefault";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import { motion } from "motion/react";
import ContainerIconsNetwork from "./ContainerIconsNetwork";
import type { IconType } from "react-icons";

export default function Main(props: { data: DATA_PRESENTATION }): ReactElement {
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
      initial={{ x: -400, opacity: 0, scaleX: 0.8 }}
      animate={{ x: 0, opacity: 1, scaleX: 1 }}
      transition={{ ease: "easeOut", duration: 1.3 }}
      className="flex items-center h-[70%] main-background text-white-dark font-poppins mt-7 "
    >
      <motion.div
        initial={{ x: 800, opacity: 0, scaleX: 0.8 }}
        animate={{ x: 0, opacity: 1, scaleX: 1 }}
        transition={{ ease: "easeOut", duration: 1.3 }}
        className="flex flex-row justify-evenly items-center w-[47%] z-1 h-[80%]"
      >
        <div className="w-[10%] h-[90%] flex flex-col items-center gap-y-5">
          <VerticalLine />
          <ContainerIconsNetwork icons={icons} />
          <VerticalLine />
        </div>
        <div className="flex flex-col justify-around w-[80%] h-full bg-neutral-700/20">
          <h1 className="text-left w-7/8 text-white-dark/90">
            {props.data.MAIN_TEXT}
          </h1>
          <h3 className="w-7/8 text-white-dark/70">{props.data.SUBTITTLE}</h3>
          <ButtonDefault
            buttonName="Saiba mais"
            width="1/2"
            height="12"
            fontSize="lg"
          />
        </div>
      </motion.div>
    </motion.main>
  );
}
