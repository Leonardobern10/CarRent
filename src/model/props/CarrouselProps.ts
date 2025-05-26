import type { ReactElement } from "react";

export type CarrouselProps<T> = {
  items: T[];
  height?: string;
  tighter?: boolean;
  renderItem: (item: T, index: number) => ReactElement;
};
