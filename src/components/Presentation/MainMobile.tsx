import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import { motion } from "motion/react";
import type { ReactElement } from "react";
import ButtonDefault from "../shared/ButtonDefault";
import Select from "../shared/Select";
import SelectDate from "../shared/SelectDate";

export default function MainMobile(props: {
  data: DATA_PRESENTATION;
}): ReactElement {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className={`relative top-0 flex flex-col justify-between bg-black-medium items-center h-fit w-full font-poppins`}
    >
      <div className="rounded-b-2xl bg-orange-primary h-fit w-full px-8">
        <div className="w-[90%]">
          <p className="text-lg text-white-background">
            Pesquise pelo local de retirada de sua preferência.
          </p>
        </div>
        <form
          action="
        "
          className="flex flex-col gap-y-10 w-full h-full py-5 text-white-background font-poppins"
        >
          <fieldset className="flex flex-col gap-y-4">
            <div>
              <label htmlFor="">Local de Retirada</label>
              <Select
                placeholder="Digite para buscar..."
                selectLabel="Teste"
                value={["teste1", "teste2"]}
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Data de Retirada</label>
              <SelectDate selectLabel="Retirada" />
            </div>
            <div className="w-full">
              <label htmlFor="">Data de Entrega</label>
              <SelectDate selectLabel="Entrega" />
            </div>
          </fieldset>
          <ButtonDefault
            backgroundColor="black-medium"
            buttonName="Buscar"
            color="orange-primary"
            clickEvent={() => console.log("Clicou!")}
          />
        </form>
      </div>
      <div className="flex flex-col gap-y-5 h-full w-full px-10 py-15 justify-start sm:items-center text-orange-primary">
        <h1 className="text-lg/8 tracking-wider font-light sm:w-5/6 text-shadow-sm text-shadow-black-medium text-center sm:text-center md:text-start">
          {props.data.MAIN_TEXT}
        </h1>
      </div>
    </motion.main>
  );
}
