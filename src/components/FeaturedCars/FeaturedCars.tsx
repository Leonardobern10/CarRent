import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import CarAd from "./CarAd";
import type { CarLabelType } from "@/model/CarLabelType";
import { BsFuelPump, BsCarFront } from "react-icons/bs";
import { VscPersonAdd } from "react-icons/vsc";

export default function FeaturedCars(/*props: {
  icons: Array<Array<CarLabelType>>;}*/): ReactElement {
  const icons: Array<CarLabelType> = [
    { icon: VscPersonAdd, content: "5" },
    { icon: BsFuelPump, content: "Gasoline" },
    { icon: BsCarFront, content: "SUV" },
  ];

  return (
    <div className="border col-start-2 col-end-7 w-full place-items-center justify-items-center">
      <TitleSection text="Our Featured Cars" />
      <div className="w-full flex flex-col items-center gap-y-10">
        <div className="w-full flex flex-row items-center justify-evenly gap-x-4 mt-10">
          <CarAd icons={icons} />
          <CarAd icons={icons} />
          <CarAd icons={icons} />
        </div>
        <div>...</div>
      </div>
    </div>
  );
}
