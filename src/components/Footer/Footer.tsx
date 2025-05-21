import type { ReactElement } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Logo";
import IconNetwork from "../IconNetwork";

export default function Footer(): ReactElement {
  return (
    <div className="col-span-7 row-span-2 md:row-span-2 flex flex-col justify-between md:justify-evenly items-center bg-black-medium md:border-t-2 md:border-t-white max-md:gap-y-7">
      <div className="w-4/5 h-1/3 text-center px-3">
        <p className="text-white/70 leading-8">
          Need help renting a car? Please call{" "}
          <span className="text-orange-primary">+1-333-444-5555</span>
        </p>
      </div>
      <div className="h-1/2 flex flex-col md:w-3/4 md:flex-row-reverse md:justify-between items-center gap-y-5">
        <ul className="md:w-1/2 flex flex-row justify-end gap-x-4  md:gap-x-8">
          <IconNetwork footer={true} icon={FaInstagram} />
          <IconNetwork footer={true} icon={FaFacebook} />
          <IconNetwork footer={true} icon={FaXTwitter} />
          <IconNetwork footer={true} icon={FaWhatsapp} />
          <IconNetwork footer={true} icon={FaLinkedinIn} />
          <IconNetwork footer={true} icon={FaTelegramPlane} />
        </ul>
        <Logo left={true} />
      </div>
    </div>
  );
}
