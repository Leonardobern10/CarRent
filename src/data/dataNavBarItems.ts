import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import {
  IoCarSportOutline,
  IoCartOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";

export const dataNavBarItems: Array<NavBarItemsType> = [
  { icon: IoHomeOutline, description: "Inicio", path: "/" },
  { icon: IoInformationCircleOutline, description: "Sobre", path: "/sobre" },
  { icon: IoCartOutline, description: "Reservas", path: "/reservas" },
  { icon: IoCarSportOutline, description: "Carros", path: "/carros" },
  { icon: MdOutlineContactPhone, description: "Contatos", path: "/contatos" },
];
