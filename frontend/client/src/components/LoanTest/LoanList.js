

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';



function LoanList() {
  const [loans, setLoans] = useState([]);
  const [filterType, setFilterType] = useState('all'); // Default: show all loans

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

  return (
    <div>
      {/* <Sidebar /> */}
      <h2>List of Loans</h2>
      <div className="filter-buttons">
        <button
          onClick={() => setFilterType('all')}
          className={filterType === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setFilterType('loan')}
          className={filterType === 'loan' ? 'active' : ''}
        >
          Loans
        </button>
        <button
          onClick={() => setFilterType('scholarship')}
          className={filterType === 'scholarship' ? 'active' : ''}
        >
          Scholarships
        </button>
      </div>
      {/* <ul>
        {filteredLoans.map((loan) => (
          <li key={loan._id}>
            Type: {loan.type} | Career: {loan.career} | Institute:{' '}
            {loan.institute} | Amount: ${loan.amount} | Term: {loan.loan_term}{' '}
            months
          </li>
        ))}
      </ul> */}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};





export default LoanList;
