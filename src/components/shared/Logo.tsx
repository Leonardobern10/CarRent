import type { ReactElement } from "react";
import { Link } from "react-router";

export default function Logo(props: {
  left?: boolean;
  black?: boolean;
}): ReactElement {
  const position = props.left ? "text-left" : "text-center";
  const black = props.black ? "text-black-medium" : "text-orange-primary";
  return (
    <div
      className={` ${position}w-[40%] hover:text-bege hover:scale-x-120 hover:scale-y-80 transition-all ${black} text-2xl font-kanit font-bold tracking-widest`}
    >
      <Link to="/">CARENT</Link>
    </div>
  );
}
