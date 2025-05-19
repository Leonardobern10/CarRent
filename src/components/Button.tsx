import type { ReactElement } from "react";

export default function Button(props: {
  buttonName: string;
  width?: string;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  weight?: string;
}): ReactElement {
  return (
    <button
      style={{
        backgroundColor: `${props.backgroundColor}`,
      }}
      className={`bg-orange-primary rounded-sm p-2 text-${
        props.fontSize ?? "sm"
      } font-${props.weight} text-${
        props.color
      } font-poppins font-bold text-black-medium min-w-30 w-${props.width} h-${
        props.height
      } hover:cursor-pointer hover:bg-black-medium hover:text-bege transition-colors`}
    >
      {props.buttonName}
    </button>
  );
}
