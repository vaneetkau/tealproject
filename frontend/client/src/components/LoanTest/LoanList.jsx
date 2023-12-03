

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';



function LoanList() {
  const [loans, setLoans] = useState([]);
  const [filterType, setFilterType] = useState('all'); // Default: show all loans

  const handleFilterChange = (type) => {
    setFilterType(type);
  };
  useEffect(() => {

    axios.get('http://localhost:4000/api/loans')
      .then((response) => {
        setLoans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching loans:', error);
      });
  }, []);

 
  const filteredLoans = filterType === 'all'
    ? loans
    : loans.filter((loan) => loan.type === filterType);

    const handleApplyClick = (loanId) => {
      console.log(`Applying for loan with ID: ${loanId}`);
    };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3" style={{paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
                <h2>List of Loans</h2>
     <div className="btn-group" role="group" aria-label="Filter loans">
        <button
          type="button"
          className={`btn ${filterType === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${filterType === 'loan' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('loan')}
        >
          Loans
        </button>
        <button
          type="button"
          className={`btn ${filterType === 'scholarship' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('scholarship')}
        >
          Scholarships
        </button>
      </div>
      <div className="container mt-5">
        <h2>Find the Ease that Suits you!</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead>
              <tr className="text-white bg-warning p-3 text-center">
                <th scope="col">Loan</th>
                <th scope="col">Term</th>
                <th scope="col">Bank</th>
                <th scope="col">Amount</th>
                <th scope="col">Career</th>
              </tr>
            </thead>
            <tbody>
              {filteredLoans.map((loan) => (
                <tr key={loan._id}>
                  <th scope="row" className=" text-primary p-4  ">
                    {loan.type}
                  </th>
                  <td className="p-4">{loan.term}</td>
                  <td className="p-4">{loan.institute}</td>
                  <td className="p-4">${loan.amount}</td>
                  <td className="p-4">{loan.career}</td>
                  <td className="p-4">
                        <button
                          className="btn btn-success"
                          onClick={() => handleApplyClick(loan._id)}
                        >
                          Apply
                        </button>
                      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};





export default LoanList;
