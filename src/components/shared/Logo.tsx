import type { ReactElement } from "react";
import { Link } from "react-router";

export default function Logo(props: { left?: boolean }): ReactElement {
  const position = props.left ? "text-left" : "text-center";
  return (
    <div className={`logo ${position} w-fit h-fit`}>
      <Link to="/">CARENT</Link>
    </div>
  );
}
