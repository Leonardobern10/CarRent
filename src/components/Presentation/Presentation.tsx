import { type ReactElement } from "react";
import Main from "./Main";

import MainMobile from "./MainMobile";
import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Presentation(props: {
  data: DATA_PRESENTATION;
}): ReactElement {
  const screenWidth: number = useWindowWidth();

  return (
    <div className="flex flex-col bg-blend-color-dodge bg-cover bg-center col-span-7 row-span-3 md:row-span-3 lg:row-span-5 bg-black-medium lg:bg-gradient-to-l lg:from-60% lg:from-white lg:to-60% lg:to-black">
      {screenWidth >= 1024 ? (
        <Main data={props.data} />
      ) : (
        <MainMobile data={props.data} />
      )}
    </div>
  );
}
