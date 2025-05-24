import Logo from "../shared/Logo";
import { motion } from "motion/react";

import { useEffect, useState } from "react";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import NavBarDesktop from "../Presentation/NavBarDesktop";
import NavBarMobile from "../Presentation/NavBarMobile";

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
      className="flex flex-row justify-between items-center bg-black-medium w-[95%] lg:w-full h-full md:m-0 py-8 px-4 lg:px-0 lg:py-5"
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
