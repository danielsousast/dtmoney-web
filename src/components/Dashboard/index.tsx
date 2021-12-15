import React from "react";
import { Sumary } from "../Sumary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sumary />
      <TransactionsTable />
    </Container>
  );
};
