import type { ReactElement } from "react";
import ItemHeader from "../shared/ItemHeader";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";

export default function NavBar(props: {
  navBarItems: Array<NavBarItemsType>;
}): ReactElement {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full text-orange-primary lg:w-[50%] p-4 lg:p-0 gap-y-2 lg:gap-y-0">
      {props.navBarItems.map((el, index) => (
        <ItemHeader key={index} value={el.description} icon={el.icon} />
      ))}
    </nav>
  );
}
