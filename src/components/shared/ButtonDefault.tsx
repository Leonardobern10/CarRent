import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";
import type { ReactElement } from "react";

export default function ButtonDefault(props: ButtonDefaultProps): ReactElement {
  const event = props.clickEvent;
  const fontSize = props.fontSize ?? "sm"; // ex: sm, base, lg
  const fontWeight = props.weight ?? "normal"; // ex: normal, bold
  const textColor = props.color ?? "black-medium"; // ex: white, black-medium
  const width = props.width ?? "fit"; // ex: fit, full, 32
  const height = props.height ?? "fit"; // ex: fit, 12, 16
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        event();
      }}
      className={`bg-orange-primary rounded-sm p-2 text-${fontSize} font-${fontWeight} text-${textColor} font-poppins min-w-30 w-${width} h-${height} hover:cursor-pointer hover:bg-black-medium hover:text-bege`}
    >
      {props.buttonName}
    </button>
  );
}
