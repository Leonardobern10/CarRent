import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import ButtonDefault from "../ButtonDefault";
import keyImage from "../../assets/images/key_image.png";

export default function ContactUs(): ReactElement {
  return (
    <section className="row-span-3 md:row-span-5 col-span-7 md:bg-linear-to-t md:from-60% md:from-black-medium md:to-60% md:to-white-background flex flex-col gap-y-4 md:gap-y-20 justify-evenly items-center font-poppins">
      <TitleSection text="Entre em contato" />
      <div className="flex flex-row h-fit w-full md:w-5/6 bg-white-background max-md:pb-12">
        <form
          action=""
          className="w-full h-fit md:w-1/2 flex flex-col justify-center items-center gap-y-10"
        >
          <input type="text" placeholder="Seu nome*" className="input" />
          <input type="text" placeholder="Seu e-mail*" className="input" />
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
        <div className="max-md:hidden w-1/2 p-10">
          <img src={keyImage} className="w-full h-full" alt="" />
        </div>
      </div>
    </section>
  );
}
