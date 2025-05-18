import Logo from "../Logo";
import { motion } from "motion/react";
import NavBarDesktop from "./NavBarDesktop";
import { useEffect, useState } from "react";
import NavBarMobile from "./NavBarMobile";

export default function Header() {
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
      className="flex flex-row justify-between items-center w-full md:w-[95%] h-[10%] mt-5 md:m-0 text-white py-8 px-4 md:px-0 md:py-5"
    >
      <Logo />
      {Number(widthScreen) < 425 ? <NavBarMobile /> : <NavBarDesktop />}
    </motion.div>
  );
}
