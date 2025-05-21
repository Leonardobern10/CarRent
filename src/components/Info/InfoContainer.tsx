import type { ReactElement } from "react";

export default function InfoContainer(props: {
  quantity: number;
  description: string;
}): ReactElement {
  return (
    <div className="flex flex-col items-center gap-x-1 font-poppins">
      <p className="text-2xl/10 md:text-4xl/10 font-normal max-md:text-orange-primary">
        {props.quantity}+
      </p>
      <p className=" text-sm md:text-lg tracking-tight text-white-dark/50 md:text-black/50">
        {props.description}
      </p>
    </div>
  );
}
