import type { CarInfo } from "@/model/types/CarInfoType";
import { BsCarFront, BsFuelPump } from "react-icons/bs";
import { VscPersonAdd } from "react-icons/vsc";
import car1 from "../assets/images/jeep_1.png";
import car2 from "../assets/images/lamborguini.png";
import car3 from "../assets/images/mini_cooper.png";
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
    name: "Ferrari Enzo",
    dailyRate: 340,
    labels: [
      { icon: VscPersonAdd, content: "2" },
      { icon: BsFuelPump, content: "Elétrico" },
      { icon: BsCarFront, content: "Sedan" },
    ],
    image: car2,
    brand: "FERRARI",
  },
  {
    name: "Fiat Copé",
    dailyRate: 167,
    labels: [
      { icon: VscPersonAdd, content: "4" },
      { icon: BsFuelPump, content: "Gasolina" },
      { icon: BsCarFront, content: "Coupé" },
    ],
    image: car3,
    brand: "FIAT",
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

export const carTypes: Array<string> = ["Eletric", "Hybrid", "Gasoline"];
