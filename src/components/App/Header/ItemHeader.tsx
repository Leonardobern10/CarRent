import useWindowWidth from "../../../hooks/useWindowWidth";
import type { ReactElement } from "react";
import type { IconType } from "react-icons";

const styles = {
  li: "max-lg:flex max-lg:flex-row max-lg:space-evenly max-lg:justify-center max-lg:w-fit max-lg:gap-x-2 list-none px-2 tracking-tight text-lg font-normal hover:cursor-pointer lg:hover:shadow-2xs lg:hover:text-bege lg:active:text-bege",
};

type ItemHeaderProps = {
  value: string;
  icon: IconType;
};

export default function ItemHeader({
  value,
  icon,
}: ItemHeaderProps): ReactElement {
  const width = useWindowWidth();
  const Icon = icon;
  return (
    <li className={styles.li}>
      {width < 1024 && (
        <span aria-label="Página inicial">
          <Icon className="h-full w-full" />
        </span>
      )}
      {value}
    </li>
  );
}
