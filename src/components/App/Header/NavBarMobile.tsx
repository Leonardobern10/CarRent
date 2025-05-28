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
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";

export default function NavBarMobile(props: {
  navBarItems: Array<NavBarItemsType>;
}): ReactElement {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <IoMenu className="w-12 h-12 text-orange-primary" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white-dark text-black-medium">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Use o menu abaixo para navegar no site.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-y-15 items-center">
          <NavBar navBarItems={props.navBarItems} />
          <ButtonDefault
            height="10"
            width="1/2"
            fontSize="xs"
            weight="normal"
            buttonName="Entrar | Cadastro"
            clickEvent={() => console.log("Clicou!")}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
