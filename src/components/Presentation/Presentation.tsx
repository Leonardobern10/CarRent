import type { ReactElement } from "react";
import Header from "./Header";
import Main from "./Main";
import { DATA } from "../../data/dataPresentation";

export default function Presentation(): ReactElement {
  return (
    <div className="flex flex-col col-span-7 row-span-1 bg-gradient-to-l from-60% from-white to-60% to-black">
      <Header />
      <Main data={DATA} />
    </div>
  );
}
