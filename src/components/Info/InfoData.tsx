import type { ReactElement } from "react";

export default function InfoData(props: {
  quantity: number;
  description: string;
}): ReactElement {
  return (
    <div className="flex flex-col items-center gap-x-1 font-poppins">
      <p className="text-4xl/10 font-normal">{props.quantity}+</p>
      <p className="text-lg tracking-tight text-black/50">
        {props.description}
      </p>
    </div>
  );
}
