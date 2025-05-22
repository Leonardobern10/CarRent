import type { ReactElement } from "react";
import Logo from "../shared/Logo";
import IconNetwork from "../shared/IconNetwork";
import type { ContactType } from "@/model/types/ContactType";

export default function Footer(props: {
  dataContact: ContactType;
}): ReactElement {
  return (
    <div className="col-span-7 row-span-2 lg:row-span-2 flex flex-col justify-between lg:justify-evenly items-center bg-black-medium max-lg:gap-y-7">
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
