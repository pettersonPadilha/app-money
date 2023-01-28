import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export  function App() {
  const [isnewTransactionModalOpen, setIsnewTransactionModalOpen ] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsnewTransactionModalOpen(true);
    }

    function handleCloseNewTransacionModal() {
        setIsnewTransactionModalOpen(false)
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isnewTransactionModalOpen} onRequestClose={handleCloseNewTransacionModal}/>
      <GlobalStyle/>
    </>
  );
}

