import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import CarAd from "./CarAd";
import type { CarInfo } from "@/model/CarInfoType";
import Carrousel from "../Carrousel";

export default function FeaturedCars(props: {
  allCars: Array<CarInfo>;
}): ReactElement {
  return (
    <div className="md:col-start-2 md:col-end-7 col-span-7 row-span-10 md:row-span-6 flex flex-col w-full h-full max-md:justify-evenly place-items-center justify-items-center gap-y-5 md:gap-y-10">
      <TitleSection text="Our Featured Cars" />
      <Carrousel
        items={props.allCars}
        renderItem={(car: CarInfo) => (
          <CarAd
            carName={car.name}
            image={car.image}
            dailyRate={car.dailyRate}
            icons={car.labels}
          />
        )}
      />
    </div>
  );
}
