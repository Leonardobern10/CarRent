import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import RatingCard from "./RatingCard";
import type { RateType } from "@/model/types/RateType";
import Carrousel from "../shared/Carrousel";

export default function Rating(props: { data: Array<RateType> }): ReactElement {
  return (
    <section className="flex flex-col w-full gap-y-5 justify-between items-center font-poppins">
      <TitleSection text="Avaliações dos clientes" />
      <Carrousel
        items={props.data}
        renderItem={(el, index) => (
          <RatingCard
            padding="6"
            key={index}
            name={el.name}
            image={el.image}
            rate={el.rate}
          />
        )}
      />
    </section>
  );
}
