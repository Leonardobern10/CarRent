import type { ReactElement } from "react";
import ItemHeader from "../shared/ItemHeader";

export default function NavBar(props: {
  desktopItems: Array<string>;
}): ReactElement {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:w-[50%] p-4 lg:p-0 gap-y-2 lg:gap-y-0">
      {props.desktopItems.map((el, index) => (
        <ItemHeader key={index} value={el} />
      ))}
    </nav>
  );
}
