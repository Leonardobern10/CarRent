import type { ReactElement } from "react";

export type CarrouselProps<T> = {
  items: T[];
  height?: string;
  renderItem: (item: T, index: number) => ReactElement;
};
