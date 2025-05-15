import type { ReactElement } from "react";

export default function TitleSection(props: {
  text: string;
  color?: string;
}): ReactElement {
  return (
    <div>
      <h2
        style={{ color: props.color }}
        className="text-4xl font-montserrat pb-3 font-medium text-black-medium decoration-orange-primary"
      >
        {props.text}
      </h2>
      <div className="w-full h-[3px] bg-orange-primary" />
    </div>
  );
}
