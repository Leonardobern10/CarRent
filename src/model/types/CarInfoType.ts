import type { CarLabelType } from "./CarLabelType";

export type CarInfo = {
  name: string;
  dailyRate: number;
  labels: Array<CarLabelType>;
  image: string;
  brand?: string;
};
