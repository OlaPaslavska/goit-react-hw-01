import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.thText}>Type</th>
          <th className={styles.thText}>Amount</th>
          <th className={styles.thText}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
