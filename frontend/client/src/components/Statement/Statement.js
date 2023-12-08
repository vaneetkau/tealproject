
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
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <div className="col-md-9">
          <div className="container-rounded-upper-left-corner">
            <h1>Statements</h1>
            <div className="d-flex">
              <button className="btn btn-primary me-2">
                <Link to="/MyProfile" className="no-underline-link text-white">
                  Current
                </Link>
              </button>
              <button className="btn btn-primary">
                <Link to="/MyProfile" className="no-underline-link text-white">
                  Past
                </Link>
              </button>
            </div>

            <div>
              <h3>Loan Payment Summary</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction Number</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Print</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Your table content */}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td></td>
                    <td>$23000</td>
                  </tr>
                </tfoot>
              </table>
              <div className="d-flex">
                <button className="btn btn-primary me-2">
                  <Link to="/PaymentMethod" className="no-underline-link text-white">
                    Add Payment Method
                  </Link>
                </button>
                <button className="btn btn-primary me-2">
                  <Link to="/PaymentMethod" className="no-underline-link text-white">
                    Edit Payment Method
                  </Link>
                </button>
                <button className="btn btn-primary">
                  <Link to="/" className="no-underline-link text-white">
                    Overview
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement