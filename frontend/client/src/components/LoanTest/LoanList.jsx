import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import '../LoanTest/LoanTest.css';
function LoanList() {
  const [loans, setLoans] = useState([]);
  const [filterType, setFilterType] = useState('all'); // Default: show all loans
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  useEffect(() => {
    axios
      .get('https://main-om95.onrender.com/api/loans/')
      .then((response) => {
        setLoans(response.data);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching loans:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const filteredLoans =
    filterType === 'all'
      ? loans
      : loans.filter((loan) => loan.type === filterType);

  const handleApplyClick = (loanId) => {
    console.log(`Applying for loan with ID: ${loanId}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3" style={{ paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <h1 className="heading1">Find the Ease that Suits You </h1>

          <div className="btn-group" role="group" aria-label="Filter loans">
            <div className="input-group mb-3">
              <select
                className="form-select"
                value={filterType}
                onChange={(e) => handleFilterChange(e.target.value)}
              >
                <option
                  value="all"
                  className={filterType === 'all' ? 'selected' : ''}
                >
                  All
                </option>
                <option
                  value="loan"
                  className={filterType === 'loan' ? 'selected' : ''}
                >
                  Loans
                </option>
                <option
                  value="scholarship"
                  className={filterType === 'scholarship' ? 'selected' : ''}
                >
                  Scholarships
                </option>
              </select>
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="bi bi-filter"></i>
                </span>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">
                  We are getting eligible loan details...
                </span>
              </div>
            </div>
          ) : (
            <div className="container mt-5">
              <div className="table-responsive">
                <table className="table  table-hover text-center">
                  <thead className="tableh">
                    <tr>
                      <th className="tableh" scope="col">
                        Loans
                      </th>
                      <th className="tableh" scope="col">
                        Career
                      </th>
                      <th className="tableh" scope="col">
                        Term
                      </th>
                      <th className="tableh" scope="col">
                        Bank
                      </th>
                      <th className="tableh" scope="col">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLoans.map((loan) => (
                      <tr key={loan._id}>
                        <td scope="row" className=" text-primary p-4  ">
                          {loan.type}
                        </td>
                        <td className="p-4">{loan.career}</td>
                        <td className="p-4">{loan.term}</td>

                        <td className="p-4">{loan.institute}</td>
                        <td className="p-4">${loan.amount}</td>

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
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanList;
