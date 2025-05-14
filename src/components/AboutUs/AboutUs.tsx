import type { ReactElement } from "react";
import Button from "../Button";
import { dataAbout } from "../../data/dataAboutUs";
import AboutDescription from "./AboutDescription";
import TitleSection from "../TitleSection";

export default function AboutUs(): ReactElement {
  return (
    <section className="h-full w-full row-span-5 col-start-2 col-end-7 mt-15">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <TitleSection text="About Us" />
        <div className="w-full flex flex-row items-center justify-center gap-x-16 mt-8">
          <div className="h-full w-1/2">
            <img
              src="./src/assets/images/car_orange.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between w-1/2 h-1/2 gap-y-8">
            <AboutDescription value={dataAbout} />
            <Button
              buttonName="Read more"
              width="fit-content"
              fontSize="1.2rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
