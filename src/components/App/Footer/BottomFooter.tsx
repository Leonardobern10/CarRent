import IconNetwork from "../../shared/IconNetwork";
import Logo from "../../shared/Logo";
import type { IconType } from "react-icons";

const styles = {
  container:
    "h-1/2 flex flex-col lg:w-3/4 lg:flex-row-reverse lg:justify-between items-center gap-y-5",
  list: "lg:w-1/2 flex flex-row justify-end gap-x-4 lg:gap-x-8",
};

type BottomFooterProps = {
  icons: IconType[];
};

export default function BottomFooter({ icons }: BottomFooterProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {icons.map((el, index) => (
          <IconNetwork key={index} footer={true} icon={el} />
        ))}
      </ul>
      <Logo left={true} />
    </div>
  );
}
