import { SessionProvider } from "next-auth/react";
import { auth } from "~/server/auth";
import Component from "./components/login";

export default async function App() {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Component />
    </SessionProvider>
  );
}
