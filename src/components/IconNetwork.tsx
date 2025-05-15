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
        props.footer ? "h-10 w-10 rounded-lg" : "h-5 w-5 rounded-[5px]"
      }`}
    >
      <Icon className="icon-base" />
    </li>
  );
}
