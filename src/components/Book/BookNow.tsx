import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Button from "../Button";

export default function BookNow(): ReactElement {
  return (
    <div className="border-2 col-span-7 flex flex-col justify-between items-center gap-y-5">
      <TitleSection text="Book Now" />
      <div className="w-screen h-5/6 bg-bege">
        <form action="" className="grid grid-col-5 grid-row-2">
          <select
            className="select col-start-2 col-end-5"
            name="pickup-location"
            id="pickup-location"
          >
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Minas Gerais">Minas Gerais</option>
          </select>
          <select className="select" name="" id="">
            <option value="pickup_date">pickup_date</option>
          </select>
          <select className="select" name="" id=""></select>
          <select className="select" name="" id=""></select>
          <select className="select" name="" id=""></select>
          <select className="select" name="" id=""></select>
          <Button buttonName="Book Now" />
        </form>
      </div>
    </div>
  );
}
