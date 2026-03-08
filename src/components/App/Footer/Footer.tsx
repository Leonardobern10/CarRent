import type { ReactElement } from "react";
import type { ContactType } from "@/model/types/ContactType";
import BottomFooter from "./BottomFooter";

const styles = {
  container:
    "lg:border-t-2 w-full flex h-full lg:h-50 flex-col justify-between lg:justify-between items-center bg-black-medium pt-10 max-lg:gap-y-7",
  containeText: "w-4/5 h-1/3 text-center px-3",
  textFooter: "text-white/70 leading-8",
  callTo: "text-orange-primary",
};

export default function Footer({
  dataContact,
}: {
  dataContact: ContactType;
}): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.containeText}>
        <p className={styles.textFooter}>
          {dataContact.text + " "}
          <span className={styles.callTo}>{dataContact.callTo}</span>
        </p>
      </div>
      <BottomFooter icons={dataContact.icons} />
    </div>
  );
}
