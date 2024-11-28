"use client";

import { Button } from "~/components/ui/button";

export const Sidebar = () => {
  return (
    <div className="w-100 border-black-1 flex h-screen flex-col items-center border-r-2 pl-4">
      <div className="px-8 py-12">
        <Button onClick={() => console.log("Hi")}>Create Event</Button>
      </div>
      <div>Upcoming Events</div>
    </div>
  );
};
