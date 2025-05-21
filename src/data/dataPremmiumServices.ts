import type { ServicesType } from "@/model/ServicesType";
import { LiaMedalSolid } from "react-icons/lia";
import { MdOutlineGpsFixed } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";

export const textServices =
  "A Carent é uma empresa de aluguel de carros respeitável que oferece uma ampla variedade de serviços úteis para todos os gostos.";

export const allServices: Array<ServicesType> = [
  {
    index: 1,
    service: "Suporte 24 Horas",
    description: "Estamos disponíveis para você em todas as horas do dia.",
    icon: Ri24HoursLine,
  },
  {
    index: 2,
    service: "Garantia Qualificada",
    description: "Todos os carros possuem seguro válido.",
    icon: LiaMedalSolid,
  },
  {
    index: 3,
    service: "GPS nos Carros",
    description: "Carros estão equipados com sistema de navegação GPS.",
    icon: MdOutlineGpsFixed,
  },
];
