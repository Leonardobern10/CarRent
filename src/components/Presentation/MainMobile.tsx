import type { DATA_PRESENTATION } from "@/model/DataPresentationType";
import { motion } from "motion/react";
import type { ReactElement } from "react";
import Button from "../Button";
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
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex flex-col justify-between items-center h-screen font-montserrat"
    >
      <div className="flex flex-col gap-y-5 h-1/2 mt-10 w-7/8">
        <h1 className="text-2xl text-start text-white-dark/80 text-shadow-sm text-shadow-black/50">
          {props.data.MAIN_TEXT}
        </h1>
        <h3 className="text-lg text-white-dark/80 text-shadow-sm text-shadow-black/50">
          {props.data.SUBTITTLE}
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center h-1/3 w-full gap-y-10 opacity-60">
        <Button
          width="1/2"
          fontSize="md"
          weight="normal"
          buttonName="Explore Now"
        />
        <ContainerIconsNetwork icons={icons} />
      </div>
    </motion.main>
  );
}
