import type { ComponentType } from "react";

export type RouteType = {
  id: number;
  path: string;
  element: ComponentType;
};
