import { Container } from './styles';
import { Sumary } from '../Sumary';
import { TransactionTable } from '../TransactionsTable';

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransactionTable />
    </Container>
  );
}
