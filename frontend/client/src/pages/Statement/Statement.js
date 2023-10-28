// Statement.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Statement() {
  const [statements] = useState([]);
  const [displayMode, setDisplayMode] = useState('current'); // 'current' or 'past'

  const handlePayClick = (statement) => {
    // Implement the logic to process a payment for the given statement.
    // You can use statement information to perform the payment.
    console.log('Payment clicked for statement:', statement);
  };

  const handleDownloadClick = (statement) => {
    // Implement the logic to download the statement.
    // You can use statement information to generate the download.
    console.log('Download clicked for statement:', statement);
  };

  const handleAddPaymentMethodsClick = () => {
    // Implement the logic to add payment methods.
    console.log('Add payment methods clicked');
  };

  const handleEditPaymentMethodsClick = () => {
    // Implement the logic to edit payment methods.
    console.log('Edit payment methods clicked');
  };

  return (
    <div className="Statement">
      <h1>Statements</h1>
      <div>
        <button onClick={() => setDisplayMode('current')}>Current</button>
        <button onClick={() => setDisplayMode('past')}>Past</button>
      </div>
      <div>
        <h3>Loan Payment Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Statement Number</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {statements
              .filter((statement) =>
                displayMode === 'current' ? statement.status === 'Pending' : true
              )
              .map((statement, index) => (
                <tr key={index}>
                  <td>{statement.date}</td>
                  <td>{statement.statementNumber}</td>
                  <td>${statement.amount}</td>
                  <td>{statement.status}</td>
                  <td>
                    <button onClick={() => handlePayClick(statement)}>Pay</button>
                    <button onClick={() => handleDownloadClick(statement)}>Download</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={handleAddPaymentMethodsClick}>Add payment methods</button>
        <button onClick={handleEditPaymentMethodsClick}>Edit payment methods</button>
        <button><Link to="/Overview">Overview</Link></button>
      </div>
      <h3>Total Amount of Loan Spending</h3>
    </div>
  );
}

export default Statement;
