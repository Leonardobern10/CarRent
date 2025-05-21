import type { ContactType } from "@/model/ContactType";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const dataContact: ContactType = {
  text: "Precisa de ajuda para alugar um carro? Por favor, ligue para",
  callTo: "+1 - 333 - 444 - 5555",
  icons: [
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaWhatsapp,
    FaLinkedinIn,
    FaTelegramPlane,
  ],
};
