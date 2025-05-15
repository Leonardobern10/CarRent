import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Service from "./Service";
import { LiaMedalSolid } from "react-icons/lia";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineGpsFixed } from "react-icons/md";

export default function PremiumServices(): ReactElement {
  return (
    <section className="font-poppins col-span-7 row-span-5 flex flex-col justify-evenly pt-5 items-center gap-y-5 bg-linear-to-b to-70% to-black-white from-70% from-black-medium">
      <TitleSection color="#FFF" text="Our Premmium Services" />
      <div className="w-4/6 h-5/6 flex flex-col justify-evenly items-center">
        <p className="w-3/5 text-white-background text-lg/8 text-center font-extralight">
          Carent is a reputable car rental company that offers a wide range of
          useful services for every taste.
        </p>
        <div className="h-full w-full flex flex-row items-center justify-between gap-x-10">
          <Service
            icon={Ri24HoursLine}
            service="24 Hours Support"
            description="We support you all hours of the day."
          />
          <Service
            icon={LiaMedalSolid}
            service="Qualified Assurance"
            description="All cars have a valid insurance."
          />
          <Service
            icon={MdOutlineGpsFixed}
            service="GPS on Cars"
            description="All cars are equipped with GPS navigation system."
          />
        </div>
      </div>
    </section>
  );
}
