import type { RatingCardProps } from "@/model/props/RatingCardProps";
import type { ReactElement } from "react";

export default function RatingCard(props: RatingCardProps): ReactElement {
  return (
    <article className="h-fit lg:h-6/7 w-full flex flex-col justify-evenly items-center max-md:gap-y-3 md:gap-y-5">
      <div className="md:h-35 h-20 md:w-35 w-20">
        <img
          className="rounded-full h-full w-full"
          src={props.image}
          loading="lazy"
          alt={`Image de nosso cliente ${props.name}`}
        />
      </div>
      <div>
        <p className="text-lg md:text-xl font-semibold">{props.name}</p>
      </div>
      <div className="w-full sm:w-7/8 text-xs/relaxed md:text-sm/relaxed text-black-medium/70">
        <p className="text-center">{props.rate}</p>
      </div>
    </article>
  );
}
