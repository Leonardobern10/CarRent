import type { ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";
import NavBar from "./NavBar";

export default function NavBarDesktop(props: {
  items: Array<string>;
}): ReactElement {
  return (
    <div className="md:w-[60%] text-black flex flex-row justify-between md:px-10 font-montserrat">
      <NavBar desktopItems={props.items} />
      <div className="mr-15">
        <ButtonDefault
          height="2.2rem"
          width="8rem"
          fontSize=".8rem"
          buttonName="Entrar | Cadastro"
        />
      </div>
    </div>
  );
}
