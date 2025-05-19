import type { ReactElement } from "react";

export default function TitleSection(props: {
  text: string;
  white?: boolean;
}): ReactElement {
  return (
    <div>
      <h2
        className={`text-xl md:text-4xl font-montserrat pb-3 font-medium ${
          props.white ? "text-white-dark" : "text-black-medium"
        } md:text-black-medium decoration-orange-primary`}
      >
        {props.text}
      </h2>
      <div className="w-full h-[3px] bg-orange-primary" />
    </div>
  );
}
