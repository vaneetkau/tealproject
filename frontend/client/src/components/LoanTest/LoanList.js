

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
    <div className="App">
      <div className="sidebar-div">
        <Sidebar />
      </div>{' '}
      <div className="loanlist">
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
        <ul>
          {filteredLoans.map((loan) => (
            <li key={loan._id}>
              Type: {loan.type} | Career: {loan.career} | Institute:{' '}
              {loan.institute} | Amount: ${loan.amount} | Term: {loan.loan_term}{' '}
              months
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}





export default LoanList;
