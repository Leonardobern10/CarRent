import type { ReactElement } from "react";
import type { DATA_ABOUTUS } from "../../model/types/DataAboutUsType";

const styles = {
  p: "text-md/6 lg:text-lg/6 xl:text-lg/10 text-gray-dark/90 font-normal font-poppins w-full text-center lg:text-left",
};

type AboutDescriptionProps = {
  data: DATA_ABOUTUS;
};

export default function AboutDescription({
  data,
}: AboutDescriptionProps): ReactElement {
  return <p className={styles.p}>{data.TEXT}</p>;
}
