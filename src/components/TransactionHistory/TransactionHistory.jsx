import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeadItem}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.tbodyTr}>
              <td className={css.tbodyTitle}>{item.type}</td>
              <td className={css.tbodyItem}>{item.amount}</td>
              <td className={css.tbodyItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
