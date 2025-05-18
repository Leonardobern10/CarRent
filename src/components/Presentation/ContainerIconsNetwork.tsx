import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import IconNetwork from "../IconNetwork";

export default function ContainerIconsNetwork(props: {
  icons: Array<IconType>;
}): ReactElement {
  return (
    <ul className="flex flex-row md:flex-col gap-y-4 gap-x-4">
      {props.icons.map((el, index) => (
        <IconNetwork icon={el} key={index} />
      ))}
    </ul>
  );
}
