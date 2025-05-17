import type { ReactElement } from "react";
import ItemHeader from "../ItemHeader";

export default function NavBar(props: {
  desktopItems: Array<string>;
}): ReactElement {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:w-[50%] p-4 md:p-0 gap-y-2 md:gap-y-0">
      {props.desktopItems.map((el, index) => (
        <ItemHeader key={index} value={el} />
      ))}
    </nav>
  );
}
