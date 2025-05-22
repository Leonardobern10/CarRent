"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import type { ReactElement } from "react";

export default function SelectDate(props: {
  selectLabel: string;
}): ReactElement {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger className="flex flex-row items-center justify-start p-6 gap-x-4 bg-white-background/50 border-1 rounded-md h-11 w-8/9 lg:w-[280px] font-montserrat text-center lg:text-left text-sm text-neutral-900/50 font-normal">
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>{props.selectLabel}</span>}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
