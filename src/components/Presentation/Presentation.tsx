import { useEffect, useState, type ReactElement } from "react";
import Header from "./Header";
import Main from "./Main";

import MainMobile from "./MainMobile";
import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import type { NavBarItemsType } from "@/model/types/NavBarItemsType";

export default function Presentation(props: {
  data: DATA_PRESENTATION;
  navBarItems: Array<NavBarItemsType>;
}): ReactElement {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [widthScreen]);

  return (
    <div className="flex flex-col bg-[url(/src/assets/images/main_car.png)] bg-blend-color-dodge bg-cover bg-center col-span-7 row-span-3 md:row-span-3 lg:row-span-6 bg-black-medium lg:bg-gradient-to-l lg:from-60% lg:from-white lg:to-60% lg:to-black">
      <Header navBarItems={props.navBarItems} />
      {widthScreen > 1024 ? (
        <Main data={props.data} />
      ) : (
        <MainMobile data={props.data} />
      )}
    </div>
  );
}
