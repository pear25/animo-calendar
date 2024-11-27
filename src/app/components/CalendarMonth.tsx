import dayjs from "dayjs";
import React from "react";
import { CalendarDay } from "./CalendarDate";

type CalendarMonthType = {
  month: dayjs.Dayjs[][];
};

export const CalendarMonth = ({ month }: CalendarMonthType) => {
  return (
    <div className="grid flex-1 grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDay day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
