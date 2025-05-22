import type { CarLabelType } from "@/model/types/CarLabelType";
import type { ReactElement } from "react";

export default function CarLabel(props: { data: CarLabelType }): ReactElement {
  const Icon = props.data.icon;
  return (
    <div className="flex flex-row justify-between items-center gap-x-1 font-poppins">
      <Icon className="text-black/50 h-4 w-4" />
      <p className="text-xs font-medium/5 text-black">{props.data.content}</p>
    </div>
  );
}
