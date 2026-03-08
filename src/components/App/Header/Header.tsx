import Logo from "../../shared/Logo";
import { motion } from "motion/react";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import useHeader from "../../../hooks/useHeader";

const styles = {
  headerDiv:
    "flex flex-row justify-between items-center bg-linear-to-b from-30 from-black-medium to-90 to-orange-primary lg:bg-none lg:bg-black/95 w-full h-full md:m-0 p-4 lg:px-20 lg:py-5",
};

type HeaderProps = {
  navBarItems: Array<NavBarItemsType>;
};

export default function Header({ navBarItems }: HeaderProps) {
  const { widthScreen } = useHeader();
  return (
    <motion.div className={styles.headerDiv}>
      <Logo />
      {Number(widthScreen) < 1024 ? (
        <NavBarMobile navBarItems={navBarItems} />
      ) : (
        <NavBarDesktop navBarItems={navBarItems} />
      )}
    </motion.div>
  );
}
