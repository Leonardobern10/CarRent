import type { ReactElement } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "../components/ui/select";

export default function SelectComponent(props: {
  placeholder: string;
  selectLabel: string;
  value: Array<string>;
}): ReactElement {
  return (
    <Select>
      <SelectTrigger className=" hover:text-black text-sm w-8/9 lg:w-fit justify-start text-left bg-white-background p-6 h-12 font-montserrat font-normal text-neutral-900/50">
        <SelectValue
          className="text-black/50"
          placeholder={props.placeholder}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.selectLabel}</SelectLabel>
          {props.value.map((el, index) => (
            <SelectItem key={index} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
