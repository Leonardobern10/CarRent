import type { ReactElement } from "react";
import type { DATA_ABOUTUS } from "../../data/dataAboutUs";

export default function AboutDescription(props: {
  value: DATA_ABOUTUS;
}): ReactElement {
  return (
    <p className="text-2xl/12 text-gray-dark/90 font-medium font-poppins w-full text-left">
      {props.value.TEXT}
    </p>
  );
}
