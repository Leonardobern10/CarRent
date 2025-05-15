import type { ReactElement } from "react";

export default function RatingCard(props: {
  name: string;
  image: string;
  rate: string;
}): ReactElement {
  return (
    <article className="h-6/7 w-full flex flex-col justify-evenly items-center ">
      <div className="h-35 w-35">
        <img
          className="rounded-full h-full w-full"
          src={props.image}
          alt={`foto do client ${props.name}`}
        />
      </div>
      <div>
        <p className="text-xl font-semibold">{props.name}</p>
      </div>
      <div className="w-5/6 text-sm/relaxed text-black-medium/70">
        <p className="text-center">{props.rate}</p>
      </div>
    </article>
  );
}
