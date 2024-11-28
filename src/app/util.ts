import dayjs from "dayjs";

const ROWS_TO_SHOW = 5;
const DAYS_IN_WEEK = 7;

export function getMonth(): dayjs.Dayjs[][] {
  const month = Math.floor(dayjs().month());
  const year = dayjs().year();

  const currentMonthStartDate = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - currentMonthStartDate;

  const daysMatrix = new Array(ROWS_TO_SHOW).fill([]).map(() => {
    return new Array(DAYS_IN_WEEK).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getWeek(): dayjs.Dayjs[] {
  const startOfWeek = dayjs().startOf("week");
  const week = new Array(DAYS_IN_WEEK).fill(null).map((_, index) => {
    return startOfWeek.add(index, "day");
  });
  return week;
}

export function getTime(): dayjs.Dayjs[] {
  const startOfDay = dayjs().startOf("day");
  const hours = new Array(24).fill(null).map((_, index) => {
    return startOfDay.add(index, "hour");
  });
  return hours;
}
