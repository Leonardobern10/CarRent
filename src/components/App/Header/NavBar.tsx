import type { ReactElement } from "react";
import ItemHeader from "./ItemHeader";
import { NavLink } from "react-router";
import type { NavBarType } from "@/model/types/NavBarType";

const styles = {
  nav: "flex flex-col lg:flex-row justify-between items-start lg:items-center w-full text-orange-primary lg:w-[50%] p-4 lg:p-0 gap-y-2 lg:gap-y-0",
};

const navLinkOptions = (index: number, path: string) => ({
  key: index,
  to: path,
  className: ({ isActive }: { isActive: boolean }) =>
    `transition-all duration-300 ease-in-out px-2 rounded-3xl
           ${
             isActive
               ? "text-shadow-bege bg-black-medium border-2 border-orange-primary"
               : "bg-transparent border-transparent"
           }`,
});

export default function NavBar({ navBarItems }: NavBarType): ReactElement {
  return (
    <nav className={styles.nav}>
      {navBarItems.map((el, index) => (
        <NavLink {...navLinkOptions(index, el.path)}>
          <ItemHeader value={el.description} icon={el.icon} />
        </NavLink>
      ))}
    </nav>
  );
}
