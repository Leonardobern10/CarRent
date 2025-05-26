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
          to={el.path}
          className={({ isActive }) =>
            isActive
              ? "lg:border-t-2 lg:text-shadow-bege lg:bg-none bg-black-medium border-2 border-orange-primary rounded-3xl p-2"
              : ""
          }
        >
          <ItemHeader key={index} value={el.description} icon={el.icon} />
        </NavLink>
      ))}
    </nav>
  );
}
