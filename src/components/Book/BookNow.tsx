import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import ButtonDefault from "../shared/ButtonDefault";
import generateHours from "../../service/generateHours";
import { motion } from "motion/react";
import SelectComponent from "../shared/Select";
import SelectDate from "../shared/SelectDate";

export default function BookNow(props: {
  cities: Array<string>;
  carTypes: Array<string>;
}): ReactElement {
  return (
    <motion.div
      initial={{ scaleX: 0.7, scaleY: 1.2, opacity: 0 }}
      whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
      transition={{ ease: "backOut", duration: 1.3 }}
      className="col-span-7 row-span-4 lg:row-span-4 h-full lg:h-5/6 flex flex-col justify-evenly lg:justify-center items-center md:gap-y-10"
    >
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
              buttonName="Reserve Já"
              weight="bold"
              height="12"
              width="30"
              clickEvent={() => console.log("CLicou!")}
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
}
