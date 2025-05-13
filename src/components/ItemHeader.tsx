import type { ReactElement } from "react";

export default function ItemHeader(props: { value: string }): ReactElement {
  return (
    <li className="list-none px-2 tracking-tight text-xl font-medium hover:cursor-pointer hover:shadow-2xs hover:shadow-black-medium active:text-orange-primary">
      {props.value}
    </li>
  );
}
