import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function Service(props: {
  service: string;
  description: string;
  icon: IconType;
}): ReactElement {
  const Icon = props.icon;
  return (
    <article className="font-poppins flex flex-col justify-center items-center gap-y-6 border-2 bg-white h-60 max-md:p-5 md:h-80 w-full shadow-2xl">
      <div className="w-15 md:w-20 h-15 md:h-20">
        <Icon className="w-full h-full text-orange-primary" />
      </div>
      <div>
        <p className="font-semibold text-md md:text-xl text-black">
          {props.service}
        </p>
      </div>
      <div className="w-5/6">
        <p className="text-sm font-light/8 text-center text-neutral-800/50">
          {props.description}
        </p>
      </div>
    </article>
  );
}
