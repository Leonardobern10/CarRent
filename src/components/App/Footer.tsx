import type { ReactElement } from "react";
import Logo from "../shared/Logo";
import IconNetwork from "../shared/IconNetwork";
import type { ContactType } from "@/model/types/ContactType";

export default function Footer(props: {
  dataContact: ContactType;
}): ReactElement {
  return (
    <div className="lg:border-t-2 w-full flex h-full lg:h-50 flex-col justify-between lg:justify-between items-center bg-black-medium pt-10 max-lg:gap-y-7">
      <div className="w-4/5 h-1/3 text-center px-3">
        <p className="text-white/70 leading-8">
          {props.dataContact.text + " "}
          <span className="text-orange-primary">
            {props.dataContact.callTo}
          </span>
        </p>
      </div>
      <div className="h-1/2 flex flex-col lg:w-3/4 lg:flex-row-reverse lg:justify-between items-center gap-y-5">
        <ul className="lg:w-1/2 flex flex-row justify-end gap-x-4  lg:gap-x-8">
          {props.dataContact.icons.map((el, index) => (
            <IconNetwork key={index} footer={true} icon={el} />
          ))}
        </ul>
        <Logo left={true} />
      </div>
    </div>
  );
}
