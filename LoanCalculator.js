import React, { useState } from 'react';

function LoanCalculator() {
  const [formData, setFormData] = useState({
    income: 0,
    housing: 0,
    groceries: 0,
    transportation: 0,
    health: 0,
  });

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanDuration, setLoanDuration] = useState(12); // Default loan duration is 12 months

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateEligibleAmount = () => {
    const totalExpenses =
      parseFloat(formData.housing) +
      parseFloat(formData.groceries) +
      parseFloat(formData.transportation) +
      parseFloat(formData.health);

    const disposableIncome = parseFloat(formData.income) - totalExpenses;
    const additionalLoanAmount = parseFloat(formData.income) * 0.5; // 50% of monthly income

    if (disposableIncome > 0) {
      const loanMultiplier = 1; // Modify this value according to your lending criteria.
      const eligibleAmount = (
        disposableIncome * loanMultiplier +
        additionalLoanAmount
      ).toFixed(2);
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
          name="income"
          value={formData.income}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Housing Expenses ($):</label>
        <input
          type="number"
          name="housing"
          value={formData.housing}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Groceries Expenses ($):</label>
        <input
          type="number"
          name="groceries"
          value={formData.groceries}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Transportation Expenses ($):</label>
        <input
          type="number"
          name="transportation"
          value={formData.transportation}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Health Expenses ($):</label>
        <input
          type="number"
          name="health"
          value={formData.health}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={calculateEligibleAmount}>
        Calculate Eligible Loan Amount
      </button>

      {loanAmount > 0 && (
        <div>
          <h4>Eligible Loan Amount: ${loanAmount}</h4>
        </div>
      )}
      <hr />
      <div>
          <h2>Loan Interest Calculator</h2>
        </div>
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
      <button onClick={calculateMonthlyPayment}>
        Calculate Monthly Payment
      </button>
      {monthlyPayment > 0 && (
        <div>
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
