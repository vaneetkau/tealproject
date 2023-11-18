import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import './LoanList.css'

function LoanList() {
  const [loans, setLoans] = useState([]);
  const [filterType, setFilterType] = useState('all'); // Default: show all loans
  const [filterDropdown, setFilterDropdown] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/loans')
      .then((response) => {
        setLoans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching loans:', error);
      });
  }, []);

  const filteredLoans =
    filterType === 'all'
      ? loans
      : loans.filter((loan) => loan.type === filterType);

  const handleFilterType = (type) => {
    setFilterType(type);
    setFilterDropdown(false);
  };

  return (
    <div className="App">
      <div className="sidebar-div">
        <Sidebar />
      </div>{' '}
      <div className="loanlist">
        <h2 className="text-info">Find the ease that suits you</h2>
        <div className="filter-button">
          <button
            className="btn btn-dark btn-lg"
            onClick={() => setFilterDropdown(!filterDropdown)}
          >
            Filter
          </button>
          {filterDropdown && (
            <div className="filter-dropdown">
              <button onClick={() => handleFilterType('all')}>All</button>
              <button onClick={() => handleFilterType('loan')}>Loans</button>
              <button onClick={() => handleFilterType('scholarship')}>
                Scholarships
              </button>
            </div>
          )}
        </div>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Career</th>
              <th scope="col">Institute</th>
              <th scope="col">Amount</th>
              <th scope="col">Term</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.type}</td>
                <td>{loan.career}</td>
                <td>{loan.institute}</td>
                <td>${loan.amount}</td>
                <td>{loan.loan_term} months</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoanList;
