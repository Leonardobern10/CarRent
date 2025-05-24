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
    <div className="flex flex-col col-span-7 row-span-3 md:row-span-3 lg:row-span-5 bg-black-medium">
      {screenWidth >= 1024 ? (
        <Main data={props.data} />
      ) : (
        <MainMobile data={props.data} />
      )}
    </div>
  );
}
