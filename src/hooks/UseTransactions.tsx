import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from '../services/api';


interface Transaction {
    id: number;
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext =  createContext<TransactionContextData>({} as TransactionContextData );

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[]);

    async  function createTransaction(transactionInput:TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createAt: new Date(),
        })
        const {transaction} = response.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return(
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext)

    return context;
}