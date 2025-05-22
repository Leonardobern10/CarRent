import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import {
  IoCarSportOutline,
  IoCartOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";

export const dataNavBarItems: Array<NavBarItemsType> = [
  { icon: IoHomeOutline, description: "Inicio" },
  { icon: IoInformationCircleOutline, description: "Sobre" },
  { icon: IoCartOutline, description: "Reservas" },
  { icon: IoCarSportOutline, description: "Carros" },
  { icon: MdOutlineContactPhone, description: "Contatos" },
];
