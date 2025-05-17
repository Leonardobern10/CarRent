import type { ReactElement } from "react";
import Button from "../Button";
import NavBar from "./NavBar";

export default function NavBarDesktop(): ReactElement {
  const items: string[] = ["Home", "About", "Booking", "Cars", "Contacts"];
  return (
    <div className="md:w-[60%] text-black flex flex-row justify-between md:px-10 font-montserrat">
      <NavBar desktopItems={items} />
      <div className="mr-15">
        <Button
          height="2.2rem"
          width="8rem"
          fontSize=".8rem"
          buttonName="Login | Sign Up"
        />
      </div>
    </div>
  );
}
