import Logo from "../../shared/Logo";
import { motion } from "motion/react";

import { useEffect, useState } from "react";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

export default function Header(props: { navBarItems: Array<NavBarItemsType> }) {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="flex lg:fixed flex-row justify-between items-center z-2 bg-linear-to-b from-30 from-black-medium to-90 to-orange-primary lg:bg-none lg:bg-black-medium/90 w-full h-1/10 md:m-0 py-4 px-4 lg:px-4 lg:py-5"
    >
      <Logo />
      {Number(widthScreen) < 1024 ? (
        <NavBarMobile navBarItems={props.navBarItems} />
      ) : (
        <NavBarDesktop navBarItems={props.navBarItems} />
      )}
    </motion.div>
  );
}
