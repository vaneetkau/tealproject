
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import PaymentMethod from '../Pay/PaymentMethod'

const Statement = () => {

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
    <div>
        <Sidebar/>
        <div className='container-rounded-upper-left-corner'>
          <h1>Statements</h1>
            <div className='container-flex-row'>
                <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Current</Link></button>
                <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Past</Link></button>
            </div>
            <div>
                <h3>Loan Payment Summary</h3>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Transaction Number</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Print</th>
                    </tr>
                    <tr>
                        <td>03/05/2019</td>
                        <td>4852693</td>
                        <td>$5000</td>
                        <td>Paid</td>
                        <td><div className='container-flex-row'>
                            <button className="submit-1X-small" type="submit"><Link to="/" className='no-underline-link'>Pay</Link></button>
                            <button className="submit-1X-small" type="submit"><Link to="/" className='no-underline-link'>Download</Link></button>
                        </div></td>
                    </tr>
                    <tr>
                        <td>24/11/2020</td>
                        <td>2563794</td>
                        <td>$18000</td>
                        <td>Due</td>
                        <td><div className='container-flex-row'>
                            <button className="submit-1X-small" type="submit"><Link to="/" className='no-underline-link'>Pay</Link></button>
                            <button className="submit-1X-small" type="submit"><Link to="/" className='no-underline-link'>Download</Link></button>
                        </div></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td></td>
                        <td>$23000</td>
                    </tr>
                </table>
                <div className='container-flex-row'>
                            <button className="submit-1X" type="submit"><Link to="/PaymentMethod" className='no-underline-link'>Add Payment Method</Link></button>
                            <button className="submit-1X" type="submit"><Link to="/PaymentMethod" className='no-underline-link'>Edit Payment Method</Link></button>
                            <button className="submit-1X" type="submit"><Link to="/" className='no-underline-link'>Overview</Link></button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Statement