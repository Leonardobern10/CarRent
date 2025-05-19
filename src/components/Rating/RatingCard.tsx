import type { ReactElement } from "react";

export default function RatingCard(props: {
  name: string;
  image: string;
  rate: string;
}): ReactElement {
  return (
    <article className="h-fit md:h-6/7 w-full flex flex-col justify-evenly items-center max-md:gap-y-3">
      <div className="md:h-35 h-20 md:w-35 w-20">
        <img
          className="rounded-full h-full w-full"
          src={props.image}
          alt={`foto do client ${props.name}`}
        />
      </div>
      <div>
        <p className="text-lg md:text-xl font-semibold">{props.name}</p>
      </div>
      <div className="w-full md:w-5/6 text-xs/relaxed md:text-sm/relaxed text-black-medium/70">
        <p className="text-center">{props.rate}</p>
      </div>
    </article>
  );
}
