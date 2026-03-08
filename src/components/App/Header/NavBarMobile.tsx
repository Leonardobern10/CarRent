import type { ReactElement } from "react";
import NavBar from "./NavBar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import ButtonDefault from "../../shared/ButtonDefault";
import { IoMenu } from "react-icons/io5";
import type { NavBarType } from "@/model/types/NavBarType";
import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";

const styles = {
  menu: "w-12 h-12 text-orange-primary",
  sheetContent: "bg-white-dark text-black-medium",
  container: "flex flex-col gap-y-15 items-center",
};

const texts = {
  headerTitle: "Menu",
  headerDescription: "Use o menu abaixo para navegar no site.",
};

const buttonProps: ButtonDefaultProps = {
  height: "10",
  width: "1/2",
  fontSize: "xs",
  weight: "normal",
  buttonName: "Entrar",
  clickEvent: () => console.log("Clicou!"),
};

export default function NavBarMobile({
  navBarItems,
}: NavBarType): ReactElement {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <IoMenu className={styles.menu} />
        </button>
      </SheetTrigger>
      <SheetContent className={styles.sheetContent}>
        <SheetHeader>
          <SheetTitle>{texts.headerTitle}</SheetTitle>
          <SheetDescription>{texts.headerDescription}</SheetDescription>
        </SheetHeader>
        <div className={styles.container}>
          <NavBar navBarItems={navBarItems} />
          <ButtonDefault {...buttonProps} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
