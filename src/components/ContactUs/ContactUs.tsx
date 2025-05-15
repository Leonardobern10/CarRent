import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Button from "../Button";
import keyImage from "../../assets/images/key_image.png";

export default function ContactUs(): ReactElement {
  return (
    <section className="row-span-5 col-span-7 bg-linear-to-t from-60% from-black-medium to-60% to-white-background flex flex-col gap-y-4 justify-center items-center font-poppins">
      <TitleSection text="Contact Us" />
      <div className="flex flex-row h-fit w-5/6 bg-white-background">
        <form
          action=""
          className="w-1/2 flex flex-col justify-center items-center gap-y-10"
        >
          <input type="text" placeholder="Your name*" className="input" />
          <input type="text" placeholder="Your email*" className="input" />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className="input"
          />
          <Button
            buttonName="Send A Message"
            width="15rem"
            height="4rem"
            fontSize="1.2rem"
          />
        </form>
        <div className="w-1/2 p-10">
          <img src={keyImage} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="h-fit text-center p-8">
        <p className="text-white/70 leading-12">
          Need help renting a car? Please call{" "}
          <span className="text-orange-primary">+1-333-444-5555</span>
        </p>
      </div>
    </section>
  );
}
