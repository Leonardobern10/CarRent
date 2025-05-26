import type { TitleSectionsProps } from "@/model/props/TitleSectionProps";
import type { ReactElement } from "react";

export default function TitleSection(props: TitleSectionsProps): ReactElement {
  const isWhite = props.white ? "text-white-dark" : "text-black-medium";
  return (
    <div id="title-section">
      <h2
        className={`text-xl md:text-2xl lg:text-2xl font-montserrat pb-3 font-medium ${isWhite}  decoration-orange-primary`}
      >
        {props.text}
      </h2>
      <div className="w-full h-[3px] bg-orange-primary" />
    </div>
  );
}
