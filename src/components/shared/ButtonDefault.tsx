import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";
import type { ReactElement } from "react";

export default function ButtonDefault(props: ButtonDefaultProps): ReactElement {
  const event = props.clickEvent;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        event();
      }}
      className={`bg-orange-primary rounded-sm p-2 text-${
        props.fontSize ?? "sm"
      } font-${props.weight ?? "normal"} text-${
        props.color ?? "black-medium"
      } font-poppins font-bold text-black-medium min-w-30 w-${
        props.width ?? "fit"
      } h-${
        props.height ?? "fit"
      } hover:cursor-pointer hover:bg-black-medium hover:text-bege transition-colors`}
    >
      {props.buttonName}
    </button>
  );
}
