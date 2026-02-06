import Logo from "../../shared/Logo";
import { motion } from "motion/react";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import useHeader from "../../../hooks/useHeader";

const styles = {
  headerDiv:
    "flex lg:fixed flex-row justify-between items-center z-2 bg-linear-to-b from-30 from-black-medium to-90 to-orange-primary lg:bg-none lg:bg-black-medium/90 w-full h-1/10 md:m-0 py-4 px-4 lg:px-4 lg:py-5",
};

const animateOptions = (
  yInitial: number,
  yAnimate: number,
  className: string,
) => ({
  initial: { y: yInitial },
  animate: { y: yAnimate },
  transition: {
    ease: "easeOut",
    duration: 1.5,
  },
  className: className,
});

export default function Header({
  navBarItems,
}: {
  navBarItems: Array<NavBarItemsType>;
}) {
  const { widthScreen } = useHeader();

  return (
    <motion.div {...animateOptions(-100, 0, styles.headerDiv)}>
      <Logo />
      {Number(widthScreen) < 1024 ? (
        <NavBarMobile navBarItems={navBarItems} />
      ) : (
        <NavBarDesktop navBarItems={navBarItems} />
      )}
    </motion.div>
  );
}
