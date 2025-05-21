import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import ButtonDefault from "../ButtonDefault";
import SelectComponent from "../Select";
import SelectDate from "../SelectDate";
import generateHours from "../../service/generateHours";

export default function BookNow(props: {
  cities: Array<string>;
  carTypes: Array<string>;
}): ReactElement {
  return (
    <div className="col-span-7 row-span-4 lg:row-span-4 h-full lg:h-5/6 flex flex-col justify-evenly lg:justify-center items-center md:gap-y-10">
      <TitleSection text="Reserve agora" />
      <div className="flex items-center justify-evenly md:justify-center w-screen h-5/8 lg:bg-bege">
        <form
          action=""
          className=" w-3/4 lg:w-5/7 h-full flex flex-col justify-center items-center gap-y-7"
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly max-lg:gap-y-7">
            <SelectComponent
              placeholder="Selecione a localidade"
              selectLabel="Cidades"
              value={props.cities}
            />
            <SelectDate selectLabel="Data de Retirada" />
            <SelectDate selectLabel="Data de Entrega" />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-evenly max-lg:gap-y-7">
            <SelectComponent
              placeholder="Tipo de carro"
              selectLabel="Types"
              value={props.carTypes}
            />
            <SelectComponent
              placeholder="Hora de Retirada"
              selectLabel="Time"
              value={generateHours()}
            />
            <SelectComponent
              placeholder="Hora de Entrega"
              selectLabel="Time"
              value={generateHours()}
            />
            <ButtonDefault
              buttonName="Reserve agora"
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
