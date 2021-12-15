import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

import {
  Transaction,
  TransactionInsert,
  TransactionsProviderProps,
  TransactionProviderValues,
} from "./types";

const TransactionsContext = createContext<TransactionProviderValues>(
  {} as TransactionProviderValues
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>(
    [] as Transaction[]
  );

  async function getTransactions() {
    api.get("http://localhost:3000/api/transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }

  async function createTransaction(params: TransactionInsert) {
    const response = await api.post("/transactions", {
      ...params,
      createdAt: new Date(),
    });

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
