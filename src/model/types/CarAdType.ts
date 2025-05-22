import type { CarLabelType } from "./CarLabelType";

export type CarAdType = {
  icons: Array<CarLabelType>;
  carName: string;
  dailyRate: number;
  image: string;
};
