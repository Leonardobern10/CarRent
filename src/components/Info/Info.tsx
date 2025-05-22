import type { ReactElement } from "react";
import InfoContainer from "./InfoContainer";
import type { InfoType } from "@/model/types/InfoType";
import { motion } from "motion/react";

export default function Info(props: {
  allInfo: Array<InfoType>;
}): ReactElement {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "backOut", duration: 1.3 }}
      className="flex flex-col md:flex-row justify-evenly items-center w-full bg-black-medium md:bg-bege/90 col-span-7 row-span-2 lg:row-span-3 md:h-50"
    >
      {props.allInfo.map((el) => (
        <InfoContainer
          key={el.index}
          quantity={el.quantity}
          description={el.description}
        />
      ))}
    </motion.div>
  );
}
