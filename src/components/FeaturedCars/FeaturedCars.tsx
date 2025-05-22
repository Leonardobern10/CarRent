import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import CarAd from "./CarAd";
import type { CarInfo } from "@/model/CarInfoType";
import Carrousel from "../../components/shared/Carrousel";

export default function FeaturedCars(props: {
  allCars: Array<CarInfo>;
}): ReactElement {
  return (
    <div className="lg:col-start-2 lg:col-end-7 col-span-7 place-self-center row-span-4 lg:row-span-6 flex flex-col items-center w-[90%] lg:w-full h-full max-lg:justify-evenly gap-y-0 lg:gap-y-10">
      <TitleSection text="Carros em destaque" />
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
