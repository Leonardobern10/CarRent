import type { CarLabelType } from "@/model/CarLabelType";
import type { ReactElement } from "react";

export default function CarLabel(props: { data: CarLabelType }): ReactElement {
  const Icon = props.data.icon;
  return (
    <div className="flex flex-row justify-between items-center gap-x-2 font-poppins text-black-medium/80 font-semibold">
      <Icon className="h-6 w-6" />
      <p className="text-xl">{props.data.content}</p>
    </div>
  );
}
