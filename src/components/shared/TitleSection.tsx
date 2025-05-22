import type { TitleSectionsProps } from "@/model/props/TitleSectionProps";
import type { ReactElement } from "react";

export default function TitleSection(props: TitleSectionsProps): ReactElement {
  return (
    <div className="border-2">
      <h2
        className={`text-xl md:text-2xl lg:text-4xl font-montserrat pb-3 font-medium ${
          props.white ? "text-white-dark" : "text-black-medium"
        }  decoration-orange-primary`}
      >
        {props.text}
      </h2>
      <div className="w-full h-[3px] bg-orange-primary" />
    </div>
  );
}
