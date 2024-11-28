import { type StateCreator, create } from "zustand";

type ViewSlice = {
  viewState: ViewState;
  setViewState: (newViewState: ViewState) => void;
};

export enum ViewState {
  MONTH = "MONTH",
  WEEK = "WEEK",
  DAY = "DAY",
}

const createViewSlice: StateCreator<ViewSlice> = (set) => ({
  viewState: ViewState.MONTH,
  setViewState: (newViewState: ViewState) =>
    set(() => ({ viewState: newViewState })),
});

export const useViewSlice = create<ViewSlice>(createViewSlice);
