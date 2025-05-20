import type { ReactElement } from "react";
import NavBar from "./NavBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import ButtonDefault from "../ButtonDefault";
import { IoMenu } from "react-icons/io5";

export default function NavBarMobile(): ReactElement {
  const items: string[] = ["Home", "About", "Booking", "Cars", "Contacts"];
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
          <NavBar desktopItems={items} />
          <ButtonDefault
            height="2.2rem"
            width="8rem"
            fontSize=".8rem"
            buttonName="Login | Sign Up"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
