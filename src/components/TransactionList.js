import styles from "../pages/home/Home.module.css";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>{transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
