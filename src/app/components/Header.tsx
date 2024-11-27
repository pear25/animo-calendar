"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { getMonth } from "../util";

export const Header = () => {
  const { data: session } = useSession();
  const m = getMonth();
  console.log(m);
  return (
    <header className="bg-sky-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            IMAGE
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
          </a>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Feature1
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Feature2
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Feature3
          </a>
        </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
      </nav>
    </header>
  );
};
