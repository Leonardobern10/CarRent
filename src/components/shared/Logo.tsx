import type { ReactElement } from "react";
import { Link } from "react-router";

export default function Logo(props: { left?: boolean }): ReactElement {
  return (
    <div
      className={`logo ${props.left ? "text-left" : "text-center"} w-fit h-fit`}
    >
      <Link to="/">CARENT</Link>
    </div>
  );
}
