import type { ReactElement } from "react";

const styles = {
  container: "bg-orange-primary w-[1px] h-full",
};

export default function VerticalLine(): ReactElement {
  return <div className={styles.container} />;
}
