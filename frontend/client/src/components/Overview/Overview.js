import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Overview.css';

function Overview() {
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
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const handleDonePayment = () => {
    if (editingIndex !== -1) {
      const updatedPaymentMethods = [...paymentMethods];
      updatedPaymentMethods[editingIndex] = {
        type: cardholderName,
        number: accountHolder,
      };
      setPaymentMethods(updatedPaymentMethods);
      setEditingIndex(-1);
    } else {
      setPaymentMethods([
        ...paymentMethods,
        { type: cardholderName, number: accountHolder },
      ]);
    }

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
      }}
    >
      {/* Sidebar */}
      <div
        id="sidebar"
        style={{
          display: isMobileView ? 'none' : 'block',
        }}
      >
        <Sidebar />
      </div>

      <div
        style={{
          marginTop: '5px',
          marginLeft: isMobileView ? '10%' : '100px', // Adjust margin for small screens
          marginRight: isMobileView ? '100%' : '100px',
        }}
      >
        <h1 style={{ marginRight: isMobileView ? '30%' : '0' }}>Overview</h1>
        <div className="main-content">
          <div
            className="current-bill-details"
            style={{
              display: isMobileView ? 'block' : 'flex',
              flexDirection: isMobileView ? 'column' : 'row',
              alignItems: 'flex-start',
              marginTop: '50px',
            }}
          >
            <div
              style={{
                flex: '1',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
                boxShadow: '0px 4px 4px 2px rgba(0, 0, 0, 0.25)',
                display: isMobileView ? 'block' : 'flex',
                flexDirection: isMobileView ? 'row' : 'column',
                alignItems: 'center',
                width: isMobileView ? '65%' : '68%', // Adjust width for small screens
                marginBottom: '0',
                marginLeft: isMobileView ? '0' : '0',
                marginRight: isMobileView ? '0' : '0',
              }}
            >
              <h2 style={{ marginBottom: '20px' }}>Current Bill Details</h2>
              <p>
                The estimated amount of your current bill is $
                {currentBillAmount.toFixed(2)} and it's due on 06/10/2022.
              </p>
              <button
                className="submit-1X-small"
                type="submit"
                style={{ marginBottom: '10px' }}
              >
                <Link to="/PaymentMethod" className="no-underline-link">
                  Pay
                </Link>
              </button>
            </div>

            <div
              style={{
                flex: '1',
                border: '1px solid #ccc',
                height: '200px',
                padding: '20px',
                paddingTop: isMobileView ? '50px' : '70px',
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
                boxShadow: '0 7px 4px rgba(0, 0, 0, 0.1)',
                marginLeft: isMobileView ? '0' : '80px', // Adjust margin for small screens
                marginRight: '90px', // Adjust margin for small screens
                marginTop: isMobileView ? '80px' : '0',
                width: isMobileView ? '65%' : '100%',
              }}
            >
              <p>
                We value your privacy. We will not distribute any information to
                others.
              </p>
              <p>
                Read our{' '}
                <Link to="/" className="policy-link">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          <div
            className="edit-payment"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: isMobileView ? 'column' : 'row',
              marginBottom: '10px',
              marginTop: isMobileView ? '80px' : '0',
            }}
          >
            <div
              style={{
                flex: '1',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#f0f0f0',
                boxShadow: '0px 4px 4px 2px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: isMobileView ? '10%' : '0',
                marginRight: isMobileView ? '45%' : '0',
                width: isMobileView ? '70%' : '500px',
              }}
            >
              <h2 style={{ marginBottom: '50px' }}>
                {editingIndex !== -1 ? 'Edit Payment' : 'Edit Payment'}
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label
                    htmlFor="cardholderName"
                    style={{ flexBasis: '150px', marginRight: '10px' }}
                  >
                    Cardholder Name:
                  </label>
                  <input
                    type="text"
                    id="cardholderName"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    style={{
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontSize: '16px',
                      marginLeft: '10px',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label
                    htmlFor="accountNumber"
                    style={{ flexBasis: '150px', marginRight: '10px' }}
                  >
                    Account Number:
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    style={{
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontSize: '16px',
                      marginLeft: '10px',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label
                    htmlFor="expiryDate"
                    style={{ flexBasis: '150px', marginRight: '10px' }}
                  >
                    Expiry Date:
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    style={{
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontSize: '16px',
                      marginLeft: '10px',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label
                    htmlFor="cvv"
                    style={{ flexBasis: '150px', marginRight: '10px' }}
                  >
                    CVV:
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    style={{
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      fontSize: '16px',
                      marginLeft: '10px',
                    }}
                  />
                </div>
              </div>
              <button
                className="submit-1X-small"
                type="submit"
                onClick={handleDonePayment}
              >
                {editingIndex !== -1 ? 'Done' : 'Done'}
              </button>
            </div>
            <div
              style={{
                flex: '1',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                padding: '100px',
                width: isMobileView ? '110%' : '90%',
                marginLeft: isMobileView ? '0' : '0',
                marginRight: isMobileView ? '25%' : '0',
              }}
            >
              <div
                style={{
                  flex: '1',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  backgroundColor: '#f0f0f0',
                  boxShadow: '0px 4px 4px 2px rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px',
                  marginRight: isMobileView ? '50%' : '0',
                  width: isMobileView ? '100%' : '500px',
                }}
              >
                <h2 style={{ marginBottom: '20px' }}>Payment Methods</h2>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '0',
                  }}
                >
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 4px 2px rgba(0, 0, 0, 0.25)',
                        textAlign: 'center',
                        marginBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '300px',
                      }}
                    >
                      <p>{method.type}</p>
                      <p>{method.number}</p>
                      <button
                        className="submit-1X-small"
                        type="submit"
                        onClick={() => handleEditPayment(index)}
                        style={{ marginTop: '10px' }}
                      >
                        Edit Payment
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
