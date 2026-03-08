import { type ReactElement } from "react";
import Main from "./Main";

import MainMobile from "./MainMobile";
import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import useWindowWidth from "../../hooks/useWindowWidth";

const styles = {
  container:
    "flex flex-col items-center col-span-7 row-span-3 pb-20 md:p-0 bg-black-medium md:row-span-3 lg:row-span-5 lg:bg-black-medium lg:bg-gradient-to-l lg:from-60% lg:from-white lg:to-60% lg:to-black",
};

export default function Presentation({
  data,
}: {
  data: DATA_PRESENTATION;
}): ReactElement {
  const screenWidth: number = useWindowWidth();
  return (
    <div className={styles.container}>
      {screenWidth >= 1024 ? <Main /> : <MainMobile data={data} />}
    </div>
  );
}
