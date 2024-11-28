"use client";

import { LeftBar, MiddleBar, RightBar } from "./HeaderSections";

export const Header = () => {
  return (
    <header className="border-b-1">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <LeftBar />
        <MiddleBar />
        <RightBar />
      </nav>
    </header>
  );
};
