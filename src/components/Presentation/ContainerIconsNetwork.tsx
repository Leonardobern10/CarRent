import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import IconNetwork from "../shared/IconNetwork";

const styles = {
  container: "flex flex-row lg:flex-col gap-y-4 gap-x-4",
};

type ContainerIconsNetworkProps = {
  icons: Array<IconType>;
};

export default function ContainerIconsNetwork({
  icons,
}: ContainerIconsNetworkProps): ReactElement {
  return (
    <ul className={styles.container}>
      {icons.map((el, index) => (
        <IconNetwork icon={el} key={index} />
      ))}
    </ul>
  );
}
