"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useViewSlice, ViewState } from "~/store/view.store";

export const CalendarViewToggle = () => {
  const { setViewState } = useViewSlice();

  const handleViewChange = (newViewState: ViewState) => {
    setViewState(newViewState);
  };

  return (
    <Select onValueChange={handleViewChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="View" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ViewState.MONTH}>Month</SelectItem>
        <SelectItem value={ViewState.WEEK}>Week</SelectItem>
        <SelectItem value={ViewState.DAY}>Day</SelectItem>
      </SelectContent>
    </Select>
  );
};
