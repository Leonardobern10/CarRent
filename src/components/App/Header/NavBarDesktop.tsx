import type { ReactElement } from "react";
import ButtonDefault from "../../shared/ButtonDefault";
import NavBar from "./NavBar";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";

export default function NavBarDesktop(props: {
  navBarItems: Array<NavBarItemsType>;
}): ReactElement {
  return (
    <div className="lg:w-[60%] text-black flex flex-row justify-between lg:px-10 lg:gap-x-10 font-montserrat">
      <NavBar navBarItems={props.navBarItems} />
      <div className="xl:mr-15">
        <ButtonDefault
          height="10"
          fontSize="sm"
          weight="normal"
          buttonName="Entrar | Cadastro"
          clickEvent={() => console.log("Clicou!")}
        />
      </div>
    </div>
  );
}
