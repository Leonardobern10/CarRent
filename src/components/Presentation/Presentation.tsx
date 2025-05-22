import { type ReactElement } from "react";
import Header from "./Header";
import Main from "./Main";

import MainMobile from "./MainMobile";
import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Presentation(props: {
  data: DATA_PRESENTATION;
  navBarItems: Array<NavBarItemsType>;
}): ReactElement {
  const screenWidth: number = useWindowWidth();

  return (
    <div className="flex flex-col bg-[url(/src/assets/images/main_car.png)] bg-blend-color-dodge bg-cover bg-center col-span-7 row-span-3 md:row-span-3 lg:row-span-6 bg-black-medium lg:bg-gradient-to-l lg:from-60% lg:from-white lg:to-60% lg:to-black">
      <Header navBarItems={props.navBarItems} />
      {screenWidth >= 1024 ? (
        <Main data={props.data} />
      ) : (
        <MainMobile data={props.data} />
      )}
    </div>
  );
}
