import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import CarAd from "./CarAd";
import type { CarInfo } from "@/model/CarInfoType";
import Carrousel from "../Carrousel";

export default function FeaturedCars(props: {
  allCars: Array<CarInfo>;
}): ReactElement {
  return (
    <div className="border-2 border-red-500 md:col-start-2 md:col-end-7 col-span-7 place-self-center row-span-4 md:row-span-6 flex flex-col items-center w-[90%] md:w-full h-full max-md:justify-evenly gap-y-0 md:gap-y-10">
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
