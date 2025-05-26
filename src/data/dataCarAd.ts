import type { CarInfo } from "@/model/types/CarInfoType";
import { BsCarFront, BsFuelPump } from "react-icons/bs";
import { VscPersonAdd } from "react-icons/vsc";
import car1 from "../assets/images/jeep_1.png";
import car2 from "../assets/images/hb20.png";
import car3 from "../assets/images/jeep_commander.png";
import car4 from "../assets/images/nivus_1.png";
import car5 from "../assets/images/sentra_1.png";

export const allDataCars: Array<CarInfo> = [
  {
    name: "JeepXD",
    dailyRate: 200,
    labels: [
      { icon: VscPersonAdd, content: "5" },
      { icon: BsFuelPump, content: "Gasolina" },
      { icon: BsCarFront, content: "SUV" },
    ],
    image: car1,
    brand: "JEEP",
  },
  {
    name: "HB20 1.0 FLEX",
    dailyRate: 245,
    labels: [
      { icon: VscPersonAdd, content: "5" },
      { icon: BsFuelPump, content: "Flex" },
      { icon: BsCarFront, content: "Hatch" },
    ],
    image: car2,
    brand: "HYUNDAI",
  },
  {
    name: "JEEP COMMANDER 1.3 FLEX",
    dailyRate: 245,
    labels: [
      { icon: VscPersonAdd, content: "5" },
      { icon: BsFuelPump, content: "Flex" },
      { icon: BsCarFront, content: "SUV" },
    ],
    image: car3,
    brand: "JEEP",
  },
  {
    name: "Fiat Nivus 1.0",
    dailyRate: 167,
    labels: [
      { icon: VscPersonAdd, content: "5" },
      { icon: BsFuelPump, content: "Gasolina" },
      { icon: BsCarFront, content: "Sedan" },
    ],
    image: car4,
    brand: "FIAT",
  },
  {
    name: "Nissan Sentra 2.0",
    dailyRate: 245,
    labels: [
      { icon: VscPersonAdd, content: "5" },
      { icon: BsFuelPump, content: "Gasolina" },
      { icon: BsCarFront, content: "Sedan" },
    ],
    image: car5,
    brand: "NISSAN",
  },
];

export const cities: Array<string> = [
  "Rio de Janeiro",
  "Belo Horizonte",
  "São Paulo",
  "Florianopolis",
];

export const carTypes: Array<string> = ["Eletrico", "Hibrido", "Gasolina"];
