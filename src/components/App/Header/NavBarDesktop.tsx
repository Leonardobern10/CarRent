import type { ReactElement } from "react";
import ButtonDefault from "../../shared/ButtonDefault";
import NavBar from "./NavBar";
import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";
import type { NavBarType } from "@/model/types/NavBarType";
import { motion } from "motion/react";
import { slideTopToDown } from "../../../animation/slideTopToDown";

const styles = {
  container:
    "lg:w-[60%] text-black flex flex-row justify-between lg:gap-x-2 font-montserrat",
};

const buttonProps: ButtonDefaultProps = {
  height: "10",
  fontSize: "sm",
  weight: "normal",
  buttonName: "Entrar",
  backgroundColor: "orange-primary",
  clickEvent: () => console.log("Clicou!"),
};

export default function NavBarDesktop({
  navBarItems,
}: NavBarType): ReactElement {
  return (
    <motion.div {...slideTopToDown(-100, 0)} className={styles.container}>
      <NavBar navBarItems={navBarItems} />
      <div>
        <ButtonDefault {...buttonProps} />
      </div>
    </motion.div>
  );
}
