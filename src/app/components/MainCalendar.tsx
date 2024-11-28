"use client";
import { CalendarMonth } from "./CalendarMonth";
import { getMonth } from "../util";
import { useViewSlice, ViewState } from "~/store/view.store";
import { CalendarWeekView } from "./CalendarWeekView";
import { CalendarDayView } from "./CalendarDayView";
import { Sidebar } from "./Sidebar";

export const MainCalendar = () => {
  const month = getMonth();
  const { viewState } = useViewSlice();

  return (
    <div className="flex">
      <Sidebar />
      {viewState === ViewState.MONTH && <CalendarMonth month={month} />}
      {/* {viewState === ViewState.DAY && <CalendarDayView />}
      {viewState === ViewState.WEEK && <CalendarWeekView />} */}
    </div>
  );
};
