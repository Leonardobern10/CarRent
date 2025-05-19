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
    <div className="col-span-7 row-span-1 md:row-span-1 flex flex-col-reverse md:flex-row justify-evenly items-center bg-black-medium md:border-t-2 md:border-t-white max-md:gap-y-12">
      <Logo left={true} />
      <ul className="md:w-1/3 flex flex-row justify-end gap-x-4  md:gap-x-8">
        <IconNetwork footer={true} icon={FaInstagram} />
        <IconNetwork footer={true} icon={FaFacebook} />
        <IconNetwork footer={true} icon={FaXTwitter} />
        <IconNetwork footer={true} icon={FaWhatsapp} />
        <IconNetwork footer={true} icon={FaLinkedinIn} />
        <IconNetwork footer={true} icon={FaTelegramPlane} />
      </ul>
    </div>
  );
}
