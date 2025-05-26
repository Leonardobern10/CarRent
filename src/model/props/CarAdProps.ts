import type { CarLabelType } from "../types/CarLabelType";

export type CarAdProps = {
  icons: Array<CarLabelType>;
  carName: string;
  dailyRate: number;
  image: string;
  border?: boolean;
};
