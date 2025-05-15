import type { ReactElement } from "react";

export default function Logo(props: { left?: boolean }): ReactElement {
  return (
    <div className={`logo ${props.left ? "text-left" : "text-center"}`}>
      CARENT
    </div>
  );
}
