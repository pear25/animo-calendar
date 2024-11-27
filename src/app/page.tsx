import { SessionProvider } from "next-auth/react";
import { auth } from "~/server/auth";
import { Header } from "./components/Header";
import { getMonth } from "./util";
import { CalendarMonth } from "./components/CalendarMonth";

export default async function App() {
  const session = await auth();
  const month = getMonth();
  return (
    <SessionProvider session={session}>
      <Header />
      {!!session && !!month && <CalendarMonth month={month} />}
    </SessionProvider>
  );
}
