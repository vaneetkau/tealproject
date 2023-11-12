import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';


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
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const responsiveStyles = {
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },

        
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 500);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownLinks = [
    { label: 'Home', to: '/' },
    { label: 'Latest News', to: '/News' },
    { label: 'Get Advise', to: '/LoanAdvice' },
    { label: 'Get Your Ease', to: '/LoanList' },
    { label: 'Settings', to: '/MyProfileSettings' },
    { label: 'Logout', to: '/' },
  ];

  return (
    <div 
      style={{ 
        display: 'flex', ...responsiveStyles, backgroundColor: 'white', alignItems: 'center' }}>


      {/* Hamburger menu button (visible in responsive view) */}
      {isMobileView && (
        <>
          <button
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
              zIndex: 999,
              padding: '10px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            onClick={toggleDropdown}
          >
            ☰
          </button>
          {/* Conditional rendering for the dropdown menu */}
          {isDropdownOpen && (
            <div
              style={{
                position: 'fixed',
                top: '50px',
                right: '10px',
                zIndex: 1000,
                backgroundColor: 'white',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {dropdownLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <Link to={link.to} className="no-underline-link" style={{ color: 'black' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      <div style={{ display: 'flex', ...responsiveStyles }}>
        {/* Sidebar */}
        <div id="sidebar" style={{ display: isMobileView ? 'none' : 'block', backgroundColor: 'white' }}>
          <Sidebar />
        </div>

        <div style={{ marginRight: '50px', marginTop: '130px', marginLeft: '50px'}}>
          <h1>Current Bill Details</h1>
          <p>
            The estimated amount of your current bill is ${currentBillAmount.toFixed(2)} and it's due on 06/10/2022.
          </p>
          <button className="submit-1X-small" type="submit"><Link to="/Pay" className='no-underline-link'>Pay</Link>
            
          </button>

          <div style={{ marginTop: '20px' }}>
            <h2>{editingIndex !== -1 ? 'Edit Payment' : 'Edit Payment'}</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '20px',
                backgroundColor: '#f0f0f0',
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label htmlFor="cardholderName" style={{ flexBasis: '150px', marginRight: '10px' }}>
                    Cardholder Name:
                  </label>
                  <input
                    type="text"
                    id="cardholderName"
                    placeholder="Enter cardholder name"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    style={{ flex: '1', padding: '5px', border: '1px solid #ddd' }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label htmlFor="accountNumber" style={{ flexBasis: '150px', marginRight: '10px' }}>
                    Account Number:
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    placeholder="Enter account number"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                    style={{ flex: '1', padding: '5px', border: '1px solid #ddd' }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label htmlFor="expiryDate" style={{ flexBasis: '150px', marginRight: '10px' }}>
                    Expiry Date:
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="Enter expiry date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    style={{ flex: '1', padding: '5px', border: '1px solid #ddd' }}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                  <label htmlFor="cvv" style={{ flexBasis: '150px', marginRight: '10px' }}>
                    CVV:
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="Enter CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    style={{ flex: '1', padding: '5px', border: '1px solid #ddd' }}
                  />
                </div>
              </div>
              <button className="submit-1X-small" type="submit">
                {editingIndex !== -1 ? 'Done' : 'Done'}
              </button>
            </div>
          </div>

          <h2>Payment Methods</h2>
          {paymentMethods.map((method, index) => (
            <div key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <p>{method.type}</p>
              <p>{method.number}</p>
              <button
                className="submit-1X-small" type="submit"
              >
                Edit Payment
              </button>
            </div>
          ))}

          <Link to="/"></Link>
        </div>
      </div>
    </div>
  );
}

export default Overview;
