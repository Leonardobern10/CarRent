import type { IconType } from "react-icons";
import ContainerIconsNetwork from "./ContainerIconsNetwork";
import VerticalLine from "./VerticalLine";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const icons: Array<IconType> = [
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegramPlane,
];

const styles = {
  container: "w-[10%] h-[90%] flex flex-col items-center gap-y-5",
};

export default function SocialNetworksHome() {
  return (
    <div className={styles.container}>
      <VerticalLine />
      <ContainerIconsNetwork icons={icons} />
      <VerticalLine />
    </div>
  );
}
