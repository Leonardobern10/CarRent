import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Carrousel from "../Carrousel";

export default function Rating(): ReactElement {
  return (
    <section className="col-start-2 col-end-7 row-span-8 flex flex-col gap-y-5 justify-evenly items-center font-poppins mt-4">
      <TitleSection text="What our clients say?" />
      <Carrousel />
    </section>
  );
}
