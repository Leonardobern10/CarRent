import useWindowWidth from "../../../hooks/useWindowWidth";
import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function ItemHeader(props: {
  value: string;
  icon: IconType;
}): ReactElement {
  const width = useWindowWidth();
  const Icon = props.icon;
  return (
    <li className="max-lg:flex max-lg:flex-row max-lg:space-evenly max-lg:justify-center max-lg:w-fit max-lg:gap-x-2 list-none px-2 tracking-tight text-lg font-normal hover:cursor-pointer lg:hover:shadow-2xs lg:hover:shadow-bege lg:active:text-bege">
      {width < 1024 && (
        <span aria-label="Página inicial">
          <Icon className="h-full w-full" />
        </span>
      )}
      {props.value}
    </li>
  );
}
