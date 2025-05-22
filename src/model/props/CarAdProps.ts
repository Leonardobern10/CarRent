import type { CarLabelType } from "./CarLabelType";

export type CarAdProps = {
  icons: Array<CarLabelType>;
  carName: string;
  dailyRate: number;
  image: string;
};
