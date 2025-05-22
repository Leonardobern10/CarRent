import type { ReactElement } from "react";
import ButtonDefault from "../shared/ButtonDefault";
import type { CarLabelType } from "@/model/CarLabelType";
import CarLabel from "./CarLabel";

export default function CarAd(props: {
  icons: Array<CarLabelType>;
  carName: string;
  dailyRate: number;
  image: string;
}): ReactElement {
  return (
    <div className="flex flex-col justify-evenly w-full h-120 gap-y-10 p-4 font-montserrat">
      <div className="w-full h-fit flex flex-col justify-between gap-y-3">
        <img src={props.image} alt={`imagem do ${props.carName}`} />
        <p className="text-lg font-semibold">{props.carName}</p>
        <div className="flex flex-row justify-start gap-x-5">
          {props.icons.map((item, index) => {
            return <CarLabel key={index} data={item} />;
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between font-poppins max-lg:gap-y-5">
        <div className="flex flex-row lg:flex-col gap-x-10">
          <p className="text-black/50 max-md:text-sm">Daily rate from</p>
          <p className="text-black font-medium">${props.dailyRate}</p>
        </div>
        <ButtonDefault buttonName="Reserve agora" height="10" />
      </div>
    </div>
  );
}
