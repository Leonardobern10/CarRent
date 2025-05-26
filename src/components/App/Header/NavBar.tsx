import type { ReactElement } from "react";
import ItemHeader from "./ItemHeader";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import { NavLink } from "react-router";

export default function NavBar(props: {
  navBarItems: Array<NavBarItemsType>;
}): ReactElement {
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full text-orange-primary lg:w-[50%] p-4 lg:p-0 gap-y-2 lg:gap-y-0">
      {props.navBarItems.map((el, index) => (
        <NavLink
          key={index}
          to={el.path}
          className={({ isActive }) =>
            `transition-all duration-300 ease-in-out px-2 rounded-3xl
           ${
             isActive
               ? "text-shadow-bege bg-black-medium border-2 border-orange-primary"
               : "bg-transparent border-transparent"
           }`
          }
        >
          <ItemHeader value={el.description} icon={el.icon} />
        </NavLink>
      ))}
    </nav>
  );
}
