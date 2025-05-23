import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import RatingCard from "./RatingCard";
import type { RateType } from "@/model/types/RateType";
import Carrousel from "../shared/Carrousel";

export default function Rating(props: { data: Array<RateType> }): ReactElement {
  return (
    <section className="col-start-2 col-end-7 row-span-4 lg:row-span-6 flex flex-col gap-y-5 justify-evenly max-lg:pt-8 items-center font-poppins">
      <TitleSection text="Avaliações dos clientes" />
      <Carrousel
        items={props.data}
        renderItem={(el, index) => (
          <RatingCard
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
