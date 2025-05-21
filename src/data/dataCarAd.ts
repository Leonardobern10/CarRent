import type { CarInfo } from "@/model/CarInfoType";
import { BsCarFront, BsFuelPump } from "react-icons/bs";
import { VscPersonAdd } from "react-icons/vsc";
import car1 from "../assets/images/jeep_xd.png";
import car2 from "../assets/images/lamborguini.png";
import car3 from "../assets/images/mini_cooper.png";

const allDataCars: Array<CarInfo> = [
  {
    name: "JeepXD",
    dailyRate: 200,
    labels: [
      { icon: VscPersonAdd, content: "5" },
      { icon: BsFuelPump, content: "Gasolina" },
      { icon: BsCarFront, content: "SUV" },
    ],
    image: car1,
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
  },
];

export default allDataCars;
