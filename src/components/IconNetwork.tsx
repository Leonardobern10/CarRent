import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function IconNetwork(props: {
  icon: IconType;
  footer?: boolean;
}): ReactElement {
  const Icon = props.icon;
  return (
    <li
      className={`icon-container ${
        props.footer
          ? "h-7 md:h-10  w-7 md:w-10 rounded-lg"
          : "h-8 w-8 md:h-5 md:w-5 rounded-[5px]"
      }`}
    >
      <Icon className="icon-base" />
    </li>
  );
}
