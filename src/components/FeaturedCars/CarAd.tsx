import type { ReactElement } from "react";
import ButtonDefault from "../shared/ButtonDefault";
import CarLabel from "./CarLabel";
import type { CarAdProps } from "@/model/props/CarAdProps";

export default function CarAd(props: CarAdProps): ReactElement {
  const border = props.border
    ? "shadow-sm shadow-black-medium/20 rounded-lg"
    : "border-none";
  return (
    <div
      className={`flex flex-col bg-neutral-100/10 ${border} justify-evenly w-full h-110 gap-y-10 p-4 font-montserrat`}
    >
      <div className="w-full h-fit flex flex-col justify-between gap-y-3">
        <img
          className="max-h-60 object-contain"
          src={props.image}
          alt={`imagem do ${props.carName}`}
        />
        <p className="text-lg font-semibold">{props.carName}</p>
        <div className="flex flex-row justify-start gap-x-3">
          {props.icons.map((item, index) => {
            return <CarLabel key={index} data={item} />;
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between font-poppins max-lg:gap-y-5">
        <div className="flex flex-row lg:flex-col gap-x-10">
          <p className="text-black/50 max-md:text-sm">Valor diária</p>
          <p className="text-black font-medium">${props.dailyRate}</p>
        </div>
        <ButtonDefault
          buttonName="Reserve agora"
          height="10"
          clickEvent={() => console.log("Clicou")}
        />
      </div>
    </div>
  );
}
