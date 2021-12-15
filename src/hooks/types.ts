import { ReactNode } from "react";

export interface Transaction {
  id: number;
  title: string;
  type: "income" | "outcome";
  category: string;
  amount: number;
  createdAt: string;
}

export type TransactionInsert = Omit<Transaction, "id" | "createdAt">;

export interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionProviderValues {
  transactions: Transaction[];
  createTransaction: (args: TransactionInsert) => Promise<void>;
}
