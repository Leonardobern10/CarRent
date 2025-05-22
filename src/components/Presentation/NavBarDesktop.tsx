import type { ReactElement } from "react";
import ButtonDefault from "../shared/ButtonDefault";
import NavBar from "./NavBar";

export default function NavBarDesktop(props: {
  items: Array<string>;
}): ReactElement {
  return (
    <div className="lg:w-[60%] text-black flex flex-row justify-between lg:px-10 font-montserrat">
      <NavBar desktopItems={props.items} />
      <div className="mr-15">
        <ButtonDefault
          height="10"
          fontSize="sm"
          weight="normal"
          buttonName="Entrar | Cadastro"
        />
      </div>
    </div>
  );
}
