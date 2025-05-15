import type { ReactElement } from "react";
import Button from "../Button";
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
      <div className="flex flex-row justify-between font-poppins">
        <div>
          <p className="text-black/50">Daily rate from</p>
          <p className="text-black font-medium">${props.dailyRate}</p>
        </div>
        <Button buttonName="Book Now" />
      </div>
    </div>
  );
}
