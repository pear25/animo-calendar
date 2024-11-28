import dayjs from "dayjs";
import { ViewState } from "~/store/view.store";

type DayProps = {
  day: dayjs.Dayjs;
  rowIdx: number;
  style?: ViewState;
};

export const CalendarDay = ({
  day,
  rowIdx,
  style = ViewState.MONTH,
}: DayProps) => {
  const todayStyle = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-sky-400 text-white rounded-full w-7"
      : "";
  };

  const isFirstDayOfMonth = day.date() === 1;

  if (style === ViewState.MONTH) {
    return (
      <div className="flex flex-col border border-gray-200">
        <header className="flex flex-col items-center">
          {rowIdx === 0 && (
            <p className="mt-1 text-sm">{day.format("ddd").toUpperCase()}</p>
          )}
          <p className={`my-1 p-1 text-center text-sm ${todayStyle()}`}>
            {isFirstDayOfMonth ? day.format("MMM DD") : day.format("DD")}
          </p>
        </header>
        {/* calendar events logic here? */}
        <div className="flex-1 cursor-pointer"></div>
      </div>
    );
  }

  if (style === ViewState.WEEK) {
    return (
      <div className="h-fit-content flex flex-col">
        <header className="flex flex-col items-center">
          <p className="mt-1 text-sm">{day.format("ddd").toUpperCase()}</p>
          <p className={`my-1 p-1 text-center text-sm ${todayStyle()}`}>
            {isFirstDayOfMonth ? day.format("MMM DD") : day.format("DD")}
          </p>
        </header>
        {/* calendar events logic here? */}
        <div className="flex-1 cursor-pointer"></div>
      </div>
    );
  }
};
