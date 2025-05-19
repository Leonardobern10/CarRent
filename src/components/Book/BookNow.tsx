import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Button from "../Button";
import SelectComponent from "../Select";
import SelectDate from "../SelectDate";
import generateHours from "../../service/generateHours";

export default function BookNow(): ReactElement {
  const cities = [
    "Rio de Janeiro",
    "Belo Horizonte",
    "São Paulo",
    "Florianopolis",
  ];

  const carType = ["Eletric", "Hybrid", "Gasoline"];

  return (
    <div className="col-span-7 row-span-9 md:row-span-4 h-full md:h-5/6 flex flex-col justify-evenly md:justify-center items-center gap-y-10">
      <TitleSection text="Book Now" />
      <div className="flex items-center justify-evenly md:justify-center w-screen h-5/8 md:bg-bege">
        <form
          action=""
          className=" w-3/4 md:w-5/7 h-full flex flex-col justify-center items-center gap-y-7"
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-evenly max-md:gap-y-7">
            <SelectComponent
              placeholder="Pickup Location"
              selectLabel="Cidades"
              value={cities}
            />
            <SelectDate selectLabel="Pickup Date" />
            <SelectDate selectLabel="Return Date" />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-evenly max-md:gap-y-7">
            <SelectComponent
              placeholder="Car Type"
              selectLabel="Types"
              value={carType}
            />
            <SelectComponent
              placeholder="Pickup Time"
              selectLabel="Time"
              value={generateHours()}
            />
            <SelectComponent
              placeholder="Return Time"
              selectLabel="Time"
              value={generateHours()}
            />
            <Button
              buttonName="Book Now"
              weight="bold"
              height="12"
              width="30"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
