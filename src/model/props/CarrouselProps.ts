import type { ReactElement } from "react";

export type CarrouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactElement;
};
