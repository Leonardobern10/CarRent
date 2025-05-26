import type { SectionAboutProps } from "@/model/props/SectionAboutProps";
import type { ReactElement } from "react";

export default function SectionAbout({
  img,
  title,
  text,
  index,
  invert,
}: SectionAboutProps): ReactElement {
  return (
    <section
      key={index}
      className={`py-16 px-10 lg:px-25 max-w-5xl mx-auto lg:gap-x-20 gap-y-10 flex flex-col lg:flex-row${
        invert ? "-reverse" : ""
      } justify-between`}
    >
      <div className="w-full lg:w-xl h-full lg:h-80">
        <img
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
          src={img}
          alt="Imagens de nosso funcionarios"
        />
      </div>
      <div className="w-fit">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-neutral-700 leading-relaxed">{text}</p>
      </div>
    </section>
  );
}
