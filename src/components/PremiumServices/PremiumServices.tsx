import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import Service from "./Service";
import { motion } from "motion/react";
import type { PremmiumServicesProps } from "@/model/props/PremmiumServicesProps";

export default function PremiumServices(
  props: PremmiumServicesProps
): ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "backOut", duration: 1.3 }}
      className="font-poppins col-span-7 row-span-6 lg:row-span-5 flex flex-col justify-evenly pt-10 lg:pt-5 items-center lg:gap-y-5 lg:bg-linear-to-b lg:to-70% lg:to-black-white lg:from-70% lg:from-black-medium max-lg:bg-black-medium"
    >
      <TitleSection white={true} text="Serviços premmium" />
      <div className="w-4/6 h-5/6 flex flex-col justify-between lg:justify-evenly items-center gap-y-10">
        <p className="lg:w-3/4 text-white-background text-sm/8 lg:text-lg/8 text-center font-extralight">
          {props.text}
        </p>
        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-between gap-x-10 gap-y-10">
          {props.services.map((el) => (
            <Service
              key={el.index}
              icon={el.icon}
              service={el.service}
              description={el.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
