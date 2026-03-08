import type { ReactElement } from "react";
import { motion } from "motion/react";
import SocialNetworksHome from "./SocialNetworksHome";
import PresentationContent from "./PresentationContent";
import { DATA } from "../../data/dataPresentation";
import {
  appearanceAnimation,
  slideHorizontal,
} from "../../animation/animation";

const styles = {
  container:
    "flex items-center h-full w-full lg:bg-black main-background text-white-dark font-poppins pl-8",
  div: "flex flex-row justify-between items-center w-[47%] h-[80%] shadow-2xl shadow-black-medium bg-neutral-700/20 backdrop-brightness-70",
};

export default function Main(): ReactElement {
  return (
    <motion.main
      {...appearanceAnimation(0, 1, 1.5)}
      className={styles.container}
    >
      <motion.div {...slideHorizontal(-100, 0)} className={styles.div}>
        <SocialNetworksHome />
        <PresentationContent data={DATA} />
      </motion.div>
    </motion.main>
  );
}
