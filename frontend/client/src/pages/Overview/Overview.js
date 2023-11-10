// Overview.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

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
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ marginLeft: '20px', marginTop:'70px'}}>
        <h1>Current Bill Details</h1>
        <p>The estimate amount of your current bill is ${currentBillAmount.toFixed(2)} and it's due on 06/10/2022.</p>
        <button style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Pay</button>

        <div style={{ marginTop: '20px' }}>
          <h2>{editingIndex !== -1 ? 'Edit Payment' : 'Edit Payment'}</h2>
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', backgroundColor: '#f0f0f0' }}>
            <input
              type="text"
              placeholder="Cardholder Name"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ddd' }}
            />
            <input
              type="text"
              placeholder="Account Number"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
              style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ddd' }}
            />
            <input
              type="text"
              placeholder="Expiry Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ddd' }}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={{ marginBottom: '10px', padding: '5px', border: '1px solid #ddd' }}
            />
            <button
              onClick={handleDonePayment}
              style={{
                padding: '10px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                width: '100px', // Set width to 'auto' to make the button shorter
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {editingIndex !== -1 ? 'Done' : 'Done'}
            </button>
          </div>
        </div>

        <h2>Payment Methods</h2>
        {paymentMethods.map((method, index) => (
          <div key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <p>{method.type}</p>
            <p>{method.number}</p>
            <button onClick={() => handleEditPayment(index)} style={{ padding: '5px', backgroundColor: 'orange', color: 'white', border: 'none' }}>
              Edit Payment
            </button>
          </div>
        ))}

        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}

export default Overview;
