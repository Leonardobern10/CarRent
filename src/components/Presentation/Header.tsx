import Logo from "../shared/Logo";
import { motion } from "motion/react";
import NavBarDesktop from "./NavBarDesktop";
import { useEffect, useState } from "react";
import NavBarMobile from "./NavBarMobile";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";

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
      className="flex flex-row justify-between items-center w-[95%] lg:w-full h-[10%] mt-5 md:m-0 text-white py-8 px-4 lg:px-0 lg:py-5"
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
