import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContext, TransactionsProvider } from "./hooks/UseTransactions";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isnewTransactionModalOpen} onRequestClose={handleCloseNewTransacionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

