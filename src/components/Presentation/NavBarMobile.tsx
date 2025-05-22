import type { ReactElement } from "react";
import NavBar from "./NavBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import ButtonDefault from "../shared/ButtonDefault";
import { IoMenu } from "react-icons/io5";

export default function NavBarMobile(props: {
  items: Array<string>;
}): ReactElement {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenu className="w-12 h-12 text-orange-primary" />
      </SheetTrigger>
      <SheetContent className="bg-white-dark text-black-medium">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-y-15 items-center">
          <NavBar desktopItems={props.items} />
          <ButtonDefault
            height="10"
            width="1/2"
            fontSize="md"
            weight="normal"
            buttonName="Entrar | Cadastro"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
