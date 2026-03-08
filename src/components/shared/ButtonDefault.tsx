import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";
import type { ReactElement } from "react";

const styles = (
  background?: string,
  fontSize?: string,
  fontWeight?: string,
  textColor?: string,
  width?: string,
  height?: string,
) => ({
  button: `bg-${background} rounded-sm p-2 text-${fontSize} font-${fontWeight} text-${textColor} font-poppins min-w-30 w-${width} h-${height} hover:cursor-pointer hover:bg-black-medium hover:text-bege`,
});

export default function ButtonDefault({
  clickEvent,
  fontSize,
  weight,
  color,
  width,
  height,
  backgroundColor,
  buttonName,
}: ButtonDefaultProps): ReactElement {
  const event = clickEvent;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        event();
      }}
      className={
        styles(backgroundColor, fontSize, weight, color, width, height).button
      }
    >
      {buttonName}
    </button>
  );
}
