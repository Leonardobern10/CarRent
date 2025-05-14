import type { ReactElement } from "react";

export default function Button(props: {
  buttonName: string;
  width?: string;
  height?: string;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
}): ReactElement {
  return (
    <button
      style={{
        width: `${props.width}`,
        height: `${props.height}`,
        fontSize: `${props.fontSize}`,
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.color}`,
      }}
      className="bg-orange-primary rounded-sm p-2 text-sm font-poppins font-bold text-black-medium hover:cursor-pointer hover:bg-black-medium hover:text-bege transition-colors"
    >
      {props.buttonName}
    </button>
  );
}
