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
import { Button } from "./ui/button";

export default function SelectComponent(props: {
  placeholder: string;
  selectLabel: string;
  value: Array<string>;
}): ReactElement {
  return (
    <Select>
      <SelectTrigger className="hover:text-black text-lg w-8/9 md:w-fit justify-start text-left bg-white-background p-6 h-12 font-montserrat">
        <Button variant={"ghost"}>
          <SelectValue className="text-black" placeholder={props.placeholder} />
        </Button>
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
