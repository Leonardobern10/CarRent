import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function IconNetwork(props: {
  icon: IconType;
  footer?: boolean;
}): ReactElement {
  const Icon = props.icon;
  return (
    <li
      className={`bg-orange-primary flex items-center justify-center hover:cursor-pointer hover:scale-110 hover:transition-transform ${
        props.footer
          ? "h-7 md:h-10 w-7 md:w-10 rounded-lg"
          : "h-8 w-8 md:h-6 md:w-6 rounded-[5px]"
      }`}
    >
      <Icon className="icon-base" />
    </li>
  );
}
