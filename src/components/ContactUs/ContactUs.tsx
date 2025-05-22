import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import ButtonDefault from "../shared/ButtonDefault";
import keyImage from "../../assets/images/key_image.png";
import { motion } from "motion/react";

export default function ContactUs(): ReactElement {
  return (
    <section className="row-span-3 lg:row-span-5 col-span-7 lg:bg-linear-to-t lg:from-60% lg:from-black-medium lg:to-60% lg:to-white-background flex flex-col gap-y-4 lg:gap-y-20 justify-evenly items-center font-poppins">
      <TitleSection text="Entre em contato" />
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "backOut", duration: 1.3 }}
        className="flex flex-row h-fit w-full lg:w-5/6 bg-white-background max-lg:pb-12"
      >
        <form
          action=""
          className="w-full h-fit lg:h-5/6 lg:w-1/2 flex flex-col justify-center items-center gap-y-10"
        >
          <input
            type="text"
            placeholder="Seu nome*"
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Seu e-mail*"
            className="input"
            required
          />
          <textarea
            name=""
            id=""
            placeholder="Sua mensagem"
            className="input"
          />
          <ButtonDefault
            buttonName="Enviar mensagem"
            width="1/2"
            height="10"
            weight="normal"
            fontSize="sm"
          />
        </form>
        <div className="max-lg:hidden w-1/2 lg:h-5/6 p-10">
          <img src={keyImage} className="w-full h-full" alt="" />
        </div>
      </motion.div>
    </section>
  );
}
