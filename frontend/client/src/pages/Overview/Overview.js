// Overview.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Overview() {
  // Calculate the current bill amount (you can replace this with your actual logic)
  const currentBillAmount = 120.0;
  
  const [cardholderName, setCardholderName] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethods, setPaymentMethods] = useState([
    { type: 'Visa Card', number: '**** **** **** 1234' },
    { type: 'Mastercard', number: '**** **** **** 5678' },
  ]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleDonePayment = () => {
    if (editingIndex !== -1) {
      // Editing an existing payment method
      const updatedPaymentMethods = [...paymentMethods];
      updatedPaymentMethods[editingIndex] = {
        type: cardholderName,
        number: accountHolder,
      };
      setPaymentMethods(updatedPaymentMethods);
      setEditingIndex(-1);
    } else {
      // Adding a new payment method
      setPaymentMethods([
        ...paymentMethods,
        { type: cardholderName, number: accountHolder },
      ]);
    }

    // Clear input fields
    setCardholderName('');
    setAccountHolder('');
    setExpiryDate('');
    setCvv('');
  };

  const handleEditPayment = (index) => {
    const paymentMethod = paymentMethods[index];
    setCardholderName(paymentMethod.type);
    setAccountHolder(paymentMethod.number);
    setEditingIndex(index);
  };

  return (
    <div>
      <h1>Current Bill Details</h1>
      <p>The estimate amount of your current bill is ${currentBillAmount.toFixed(2)} and it's due on 06/10/2022.</p>
      <button>Pay</button>

      <div>
        <h2>{editingIndex !== -1 ? 'Edit Payment' : 'Add Payment'}</h2>
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Account Number"
          value={accountHolder}
          onChange={(e) => setAccountHolder(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry Date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button onClick={handleDonePayment}>
          {editingIndex !== -1 ? 'Done' : 'Add'}
        </button>
      </div>

      <h2>Payment Methods</h2>
      {paymentMethods.map((method, index) => (
        <div key={index}>
          <p>{method.type}</p>
          <p>{method.number}</p>
          <button onClick={() => handleEditPayment(index)}>Edit Payment</button>
        </div>
      ))}

      <Link to="/"></Link>
    </div>
  );
}

export default Overview;
