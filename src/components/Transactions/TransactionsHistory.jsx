import React from 'react';
import styles from './transactions.module.css';

export const TransactionsHistory = ({ items }) => {
  return (
    <div>
      <table class={styles.transaction_history}>
        <thead>
          <tr>
            <th class={styles.th}>Type</th>
            <th class={styles.th}>Amount</th>
            <th class={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody class={styles.transaction_body}>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
