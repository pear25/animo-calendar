import dayjs from "dayjs";
import { CalendarViewToggle } from "../CalendarViewToggle";
import { signIn, signOut, useSession } from "next-auth/react";

export const LeftBar = () => {
  return <div className="flex lg:flex-1">{/* <CalendarViewToggle /> */}</div>;
};

export const MiddleBar = () => {
  return <div className="">{dayjs(new Date()).format("DD-MM-YYYY")}</div>;
};

export const RightBar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-1 justify-end">
      {session ? (
        <div className="text-sm/6 font-semibold text-gray-900">
          <span className="mr-4">Hi, {session.user.email}</span>
          <button onClick={() => signOut()}>Log Out</button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="text-sm/6 font-semibold text-gray-900"
        >
          Log In
        </button>
      )}
    </div>
  );
};
