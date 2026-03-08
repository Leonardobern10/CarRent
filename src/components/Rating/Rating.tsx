import type { ReactElement } from "react";
import TitleSection from "../shared/TitleSection";
import RatingCard from "./RatingCard";
import type { RateType } from "@/model/types/RateType";
import Carrousel from "../shared/Carrousel";

const styles = {
  container:
    "flex flex-col w-full gap-y-5 justify-between items-center font-poppins",
};

const titleText = "Avaliação dos clientes";

const ratingOptions = (el: RateType, index: number) => ({
  padding: "6",
  key: index,
  name: el.name,
  image: el.image,
  rate: el.rate,
});

type RatingProps = {
  data: Array<RateType>;
};

export default function Rating({ data }: RatingProps): ReactElement {
  return (
    <section className={styles.container}>
      <TitleSection text={titleText} />
      <Carrousel
        items={data}
        tighter={true}
        renderItem={(el, index) => <RatingCard {...ratingOptions(el, index)} />}
      />
    </section>
  );
}
