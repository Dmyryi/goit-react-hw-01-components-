import React from 'react'
import '../index'

export const TransactionsHistory = ({items}) => {
  return (
    <div>
      <table className="transaction-history">
  <thead>
    <tr>
      <th className='th'>Type</th>
      <th className='th'>Amount</th>
      <th className='th'>Currency</th>
    </tr>
  </thead>

              <tbody className='transaction-body'>
                  {items.map((item) => (
        <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
      ))}
  </tbody>
</table>
    </div>
  )
}


