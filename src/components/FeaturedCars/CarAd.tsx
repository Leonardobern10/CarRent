import type { ReactElement } from "react";
import Button from "../Button";
import type { CarLabelType } from "@/model/CarLabelType";
import CarLabel from "./CarLabel";

export default function CarAd(props: {
  icons: Array<CarLabelType>;
}): ReactElement {
  return (
    <div className="border-2 w-1/4 h-70">
      <div>
        <img src="" alt="" />
        <p>Jeep XD</p>
        <div className="flex flex-row justify-start gap-x-4">
          {props.icons.map((item, index) => {
            return <CarLabel key={index} data={item} />;
          })}
        </div>
      </div>
      <div>
        <div>
          <p>Daily rate from</p>
          <p>$200</p>
        </div>
        <Button buttonName="Book Now" />
      </div>
    </div>
  );
}
