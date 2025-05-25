import type { ReactElement } from "react";
import type { DATA_ABOUTUS } from "../../model/types/DataAboutUsType";

export default function AboutDescription(props: {
  data: DATA_ABOUTUS;
}): ReactElement {
  return (
    <p className="text-md/6 lg:text-lg/6 xl:text-lg/10 text-gray-dark/90 font-normal font-poppins w-full text-center lg:text-left">
      {props.data.TEXT}
    </p>
  );
}
