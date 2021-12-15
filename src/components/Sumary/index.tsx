import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export const Sumary: React.FC = () => {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce(
    (acumulator, transaction) => {
      if (transaction.type === "income") {
        acumulator.income += transaction.amount;
        acumulator.total += transaction.amount;
      } else {
        acumulator.outcome += transaction.amount;
        acumulator.total -= transaction.amount;
      }

      return acumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.income)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.outcome)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
};
