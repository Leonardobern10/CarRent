import { motion } from "motion/react";
import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function Service(props: {
  service: string;
  description: string;
  icon: IconType;
}): ReactElement {
  const Icon = props.icon;
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "backOut", duration: 1.3 }}
      className="font-poppins flex flex-col justify-center items-center gap-y-6 md:gap-y-2 border-2 bg-white h-60 max-lg:p-5 lg:h-70 w-full md:w-5/7 lg:w-full shadow-2xl"
    >
      <div className="w-15 lg:w-20 h-15 lg:h-20">
        <Icon className="w-full h-full text-orange-primary" />
      </div>
      <div>
        <p className="font-semibold text-md lg:text-lg text-black">
          {props.service}
        </p>
      </div>
      <div className="w-5/6 lg:w-[90%]">
        <p className="text-sm font-light/8 text-center text-neutral-800/50">
          {props.description}
        </p>
      </div>
    </motion.article>
  );
}
