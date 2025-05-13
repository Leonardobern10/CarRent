import type { ReactElement } from "react";

export default function TitleSection(props: { text: string }): ReactElement {
  return (
    <h2 className="text-4xl font-montserrat pb-3 font-medium text-black-medium decoration-orange-primary underline">
      {props.text}
    </h2>
  );
}
