import type { ReactElement } from "react";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";

export default function Footer(): ReactElement {
  return (
    <div className="col-span-7 row-span-1 flex flex-row justify-evenly items-center bg-black-medium border-2 border-t-white">
      <div className="w-1/3 logo">CARENT</div>
      <div className="w-1/3 flex flex-row justify-end gap-x-8">
        <FaInstagramSquare className="icon-footer" />
        <FaSquareXTwitter className="icon-footer" />
        <FaSquareFacebook className="icon-footer" />
        <FaSquareWhatsapp className="icon-footer" />
        <FaTelegram className="icon-footer" />
      </div>
    </div>
  );
}
