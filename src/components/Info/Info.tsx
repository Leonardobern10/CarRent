import type { ReactElement } from "react";
import InfoData from "./InfoData";

export default function Info(): ReactElement {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center w-full bg-black-medium md:bg-bege/90 col-span-7 row-span-2 md:row-span-3 md:h-50">
      <InfoData quantity={450} description="Car For Rent" />
      <InfoData quantity={800} description="Happy Clients" />
      <InfoData quantity={750} description="Retal Locations" />
    </div>
  );
}
