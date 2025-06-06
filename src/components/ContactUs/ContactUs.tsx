import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import ButtonDefault from "../shared/ButtonDefault";
import keyImage from "../../assets/images/key_image.png";
import { motion } from "motion/react";

export default function ContactUs(props: { title: string }): ReactElement {
  return (
    <section className="row-span-3 lg:row-span-4 col-span-7 bg-white-background lg:bg-linear-to-t lg:from-60% lg:from-black-medium lg:to-60% lg:to-white-dark flex flex-col py-15 gap-y-10 lg:gap-y-20 justify-between items-center font-poppins">
      <TitleSection text={props.title} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "backOut", duration: 1.3 }}
        className="flex flex-row justify-around h-fit lg:h-5/7 w-full lg:w-5/6 lg:bg-white-dark max-lg:pb-12"
      >
        <form
          data-testid="contact-form"
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
            clickEvent={() => console.log("Clicou")}
          />
        </form>
        <div className="flex justify-center items-center max-lg:hidden w-1/2 lg:h-5/6">
          <img
            src={keyImage}
            className="w-5/6 h-full"
            alt="Recebendo a chave do carro"
          />
        </div>
      </motion.div>
    </section>
  );
}
