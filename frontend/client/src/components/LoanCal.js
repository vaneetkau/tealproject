import React, { useState } from 'react';

function LoanCalculator() {
  const [income, setIncome] = useState(0);
  const [housing, setHousing] = useState(0);
  const [groceries, setGroceries] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [health, setHealth] = useState(0);
  const [schoolFees, setSchoolFees] = useState(0);
  const [miscellaneous, setMiscellaneous] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);

  const calculateEligibleAmount = () => {
    const totalExpenses =
      housing + groceries + transportation + health + schoolFees + miscellaneous;
    const disposableIncome = income - totalExpenses;
    const additionalLoanAmount = income * 0.5; // 50% of monthly income
  
    if (disposableIncome > 0) {
      const loanMultiplier = 1; // Modify this value according to your lending criteria.
      const eligibleAmount = (disposableIncome * loanMultiplier + additionalLoanAmount).toFixed(2);
      setLoanAmount(eligibleAmount);
    } else {
      setLoanAmount(0);
    }
  };
  

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const months = parseInt(loanDuration);
    const rate = 0.10 / 12; // 10% annual interest rate, converted to monthly rate

    if (principal > 0 && months > 0 && rate > 0) {
      const monthly = (principal * rate) / (1 - Math.pow(1 + rate, -months));
      setMonthlyPayment(monthly.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Loan Eligibility Calculator</h2>
      <div>
        <label>Monthly Income ($):</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      {/* ... (Other input fields for expenses) */}
      <button onClick={calculateEligibleAmount}>Calculate Eligible Loan Amount</button>

      {loanAmount > 0 && (
        <div>
          <h3>Eligible Loan Amount: ${loanAmount}</h3>
        </div>
      )}
      <hr />
      <div>
        <label>Loan Amount ($):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Duration (months):</label>
        <input
          type="number"
          value={loanDuration}
          onChange={(e) => setLoanDuration(e.target.value)}
        />
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
      {monthlyPayment > 0 && (
        <div>
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
