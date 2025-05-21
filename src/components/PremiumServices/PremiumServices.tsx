import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Service from "./Service";
import { LiaMedalSolid } from "react-icons/lia";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineGpsFixed } from "react-icons/md";

export default function PremiumServices(): ReactElement {
  return (
    <section className="font-poppins col-span-7 row-span-6 md:row-span-5 flex flex-col justify-evenly pt-10 md:pt-5 items-center md:gap-y-5 md:bg-linear-to-b md:to-70% md:to-black-white md:from-70% md:from-black-medium max-md:bg-black-medium">
      <TitleSection white={true} text="Serviços premmium" />
      <div className="w-4/6 h-5/6 flex flex-col justify-between md:justify-evenly items-center gap-y-10">
        <p className="md:w-3/5 text-white-background text-sm/8 md:text-lg/8 text-center font-extralight">
          A Carent é uma empresa de aluguel de carros respeitável que oferece
          uma ampla variedade de serviços úteis para todos os gostos.
        </p>
        <div className="h-full w-full flex flex-col md:flex-row items-center justify-between gap-x-10 gap-y-10">
          <Service
            icon={Ri24HoursLine}
            service="Suporte 24 Horas"
            description="Estamos disponíveis para você em todas as horas do dia."
          />
          <Service
            icon={LiaMedalSolid}
            service="Garantia Qualificada"
            description="Todos os carros possuem seguro válido."
          />
          <Service
            icon={MdOutlineGpsFixed}
            service="GPS nos Carros"
            description="Todos os carros estão equipados com sistema de navegação GPS."
          />
        </div>
      </div>
    </section>
  );
}
