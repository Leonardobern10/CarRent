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
          ? "h-8 lg:h-10 w-8 lg:w-10 rounded-lg"
          : "h-8 w-8 lg:h-6 lg:w-6 rounded-[5px]"
      }`}
    >
      <Icon className="icon-base" />
    </li>
  );
}
