import { SessionProvider } from "next-auth/react";
import { auth } from "~/server/auth";
import { Header } from "./components/Navbar/Header";
import { getMonth } from "./util";
import Modal from "react-modal";
import { MainCalendar } from "./components/MainCalendar";

export default async function App() {
  const session = await auth();
  const month = getMonth();
  return (
    <SessionProvider session={session}>
      <Header />
      {!!session && !!month && <MainCalendar />}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </SessionProvider>
  );
}
