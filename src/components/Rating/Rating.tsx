import type { ReactElement } from "react";
import TitleSection from "../TitleSection";
import Carrousel from "../Carrousel";
import dataRating from "../../data/dataRating";
import RatingCard from "./RatingCard";

export default function Rating(): ReactElement {
  return (
    <section className="col-start-2 col-end-7 row-span-6 flex flex-col gap-y-5 justify-evenly items-center font-poppins">
      <TitleSection text="What our clients say?" />
      <Carrousel
        items={dataRating}
        renderItem={(el) => (
          <RatingCard name={el.name} image={el.image} rate={el.rate} />
        )}
      />
    </section>
  );
}
