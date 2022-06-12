import { useFirestore } from "../hooks/useFirestore";
import styles from "../pages/home/Home.module.css";

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore("transactions");
  return (
    <div>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>{transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
