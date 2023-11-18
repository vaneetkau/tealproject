import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar'

const PaymentMethod = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expiryDateMM, setExpiryDateMM] = useState("")
    const [expiryDateYYYY, setExpiryDateYYYY] = useState("")
    const [cvv, setCVV] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [email, setEmail] = useState("");

    const handleFirstNameOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handleLastNameOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handleCardNumberOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handleExpiryDateMMOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handleExpiryDateYYYYOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handleCVVOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handlePostalCodeOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handleEmailOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };

  return (
    <div className='App'>
        <Sidebar/>
        <div className='container-rounded-upper-left-corner'>
            <h2>Payment Method</h2>
            <div>
                <div>
                    <div>
                        <label htmlFor="CreditDebit">Credit/Debit</label>
                        <input type="radio" name="CreditDebit" value={""}/>
                        <hr />
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" onChange={handleFirstNameOnChange} placeholder="Enter your First Name" name="firstName" value={firstName}/>
                    
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" onChange={handleLastNameOnChange} placeholder="Enter your Last Name" name="lastName" value={lastName}/>
                        </div>
                        <div>
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="number" onChange={handleCardNumberOnChange} placeholder="xxxx-xxxx-xxxx-xxxx" name="cardNumber" value={cardNumber}/>
                    
                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input type="number" onChange={handleExpiryDateMMOnChange} placeholder="MM" name="expiryDate" value={expiryDateMM}/>
                            <input type="number" onChange={handleExpiryDateYYYYOnChange} placeholder="YYYY" name="expiryDate" value={expiryDateYYYY}/>
                            <label htmlFor="cvv">CVV</label>
                            <input type="number" onChange={handleCVVOnChange} placeholder="CVV" name="CVV" value={cvv}/>
                        </div>
                        <div>
                            <label htmlFor="postalCode">Postal Code</label>
                            <input type="text" onChange={handlePostalCodeOnChange} placeholder="XXX-XXX" name="PostalCode" value={postalCode}/>
                            <label htmlFor="email">Email Address</label>
                            <input value={email} onChange={handleEmailOnChange} type="email" placeholder="example@email.com" id="email" name="email"
                        />
                    
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Payable Amount</h4>
                            <h5>Amount</h5>
                            <h5>Tax</h5>
                            <h5>Total Amount</h5>
                        </div>
                        <div>
                            <p>We value your privacy. We will not distribute any information to others.</p>
                            <p>Read our <a>Privacy Policy.</a></p>
                        </div>
                    </div>
                </div>
                <div className='container-flex-row'>
                    <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Proceed to Pay</Link></button>
                    <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Cancel</Link></button>
                 </div>
            </div>

            
        </div>


    </div>
  )
}

export default PaymentMethod
