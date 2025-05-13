import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import CarAd from "./CarAd";
import type { CarInfo } from "@/model/CarInfoType";

export default function FeaturedCars(props: {
  allCars: Array<CarInfo>;
}): ReactElement {
  return (
    <div className="col-start-2 col-end-7 w-full place-items-center justify-items-center">
      <TitleSection text="Our Featured Cars" />
      <div className="w-full flex flex-col items-center gap-y-10">
        <div className="w-full flex flex-row items-center justify-evenly gap-x-4 mt-10">
          {props.allCars?.map((el, index) => (
            <CarAd
              image={el.image}
              key={index}
              icons={el.labels}
              carName={el.name}
              dailyRate={el.dailyRate}
            />
          ))}
        </div>
        <div className="flex flex-row gap-x-4">
          <div className="circle" />
          <div className="circle bg-orange-primary" />
          <div className="circle" />
        </div>
      </div>
    </div>
  );
}
