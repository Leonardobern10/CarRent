import type { ReactElement } from "react";
import type { DATA_ABOUTUS } from "@/model/DataAboutUsType";

export default function AboutDescription(props: {
  value: DATA_ABOUTUS;
}): ReactElement {
  return (
    <p className="lg:text-xl/9 text-gray-dark/90 font-normal font-poppins w-full text-center lg:text-left">
      {props.value.TEXT}
    </p>
  );
}
