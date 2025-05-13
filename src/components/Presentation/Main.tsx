import type { ReactElement } from "react";
import VerticalLine from "./VerticalLine";
import Button from "../Button";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaTelegram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import type { DATA_PRESENTATION } from "@/model/DataPresentationType";

export default function Main(props: { data: DATA_PRESENTATION }): ReactElement {
  return (
    <main className="flex items-center h-[70%] main-background text-white-dark font-poppins">
      <div className="flex flex-row justify-evenly items-center w-[47%] z-1 h-[80%]">
        <div className="w-[10%] h-[70%] flex flex-col items-center gap-y-5">
          <VerticalLine />
          <ul className="flex flex-col gap-y-4">
            <FaInstagramSquare className="icon-network" />
            <FaSquareXTwitter className="icon-network" />
            <FaSquareFacebook className="icon-network" />
            <FaSquareWhatsapp className="icon-network" />
            <FaTelegram className="icon-network" />
          </ul>
          <VerticalLine />
        </div>
        <div className="flex flex-col justify-around w-[80%] h-full bg-neutral-700/20">
          <h1 className="text-left w-6/7 text-white-dark/90">
            {props.data.MAIN_TEXT}
          </h1>
          <h3 className="w-6/7 text-white-dark/70">{props.data.SUBTITTLE}</h3>
          <Button
            buttonName="Explore Now"
            width="50%"
            height="4.5rem"
            fontSize="2rem"
          />
        </div>
      </div>
    </main>
  );
}
