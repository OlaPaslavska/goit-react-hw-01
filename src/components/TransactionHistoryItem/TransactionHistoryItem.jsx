import styles from "./TransactionHistoryItem.module.css";
const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <th className={styles.tdType}>{type}</th>
      <th className={styles.tdAmount}>{amount}</th>
      <th className={styles.tdCurrency}>{currency}</th>
    </tr>
  );
};
export default TransactionHistoryItem;
