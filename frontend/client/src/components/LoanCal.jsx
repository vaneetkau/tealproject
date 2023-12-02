import React, { useState } from 'react';
import PieChart from './PieChart';

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
    updatePieChartData();
  };

    const [pieChartData, setPieChartData] = useState({
      labels: ['Eligible Loan Amount', 'Monthley Payment'],
      data: [50,50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      label: 'Sample Pie Data',
    });
  const updatePieChartData = () => {
    const newData = [loanAmount, monthlyPayment /* Add other relevant data */];
    setPieChartData({ ...pieChartData, data: newData });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Loan Eligibility Calculator</h2>
      <div className="row">
        <div className="col-md-6">
          <label>Monthly Income ($):</label>
          <input
            className="form-control-md mb-3"
            type="number"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
          />
          <div>
            <label>Housing Expenses ($):</label>
            <input
              className="form-control-md mb-3"
              type="number"
              name="housing"
              value={formData.housing}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Groceries Expenses ($):</label>
            <input
              className="form-control-md mb-3"
              type="number"
              name="groceries"
              value={formData.groceries}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Transportation Expenses ($):</label>
            <input
              className="form-control-md mb-3"
              type="number"
              name="transportation"
              value={formData.transportation}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Health Expenses ($):</label>
            <input
              className="form-control-md mb-3"
              type="number"
              name="health"
              value={formData.health}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <PieChart pieChartData={pieChartData} />{' '}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <button
            className="btn btn-lg btn-block btn-primary"
            onClick={calculateEligibleAmount}
          >
            Calculate Eligible Loan Amount
          </button>
          {loanAmount > 0 && (
            <div className="mt-3">
              <h4>Eligible Loan Amount: ${loanAmount}</h4>
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="mt-4">
        <h2 className="text-center">Loan Interest Calculator</h2>
      </div>

      <div className="row">
        <div className="col-md-6">
          <label>Loan Amount ($):</label>
          <input
            className="form-control-md mb-3"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <label>Loan Duration (months):</label>
          <input
            className="form-control-md mb-3"
            type="number"
            value={loanDuration}
            onChange={(e) => setLoanDuration(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-lg btn-block btn-primary"
            onClick={calculateMonthlyPayment}
          >
            Calculate Monthly Payment
          </button>
          {monthlyPayment > 0 && (
            <div className="mt-3">
              <h3>Monthly Payment: ${monthlyPayment}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanCalculator;
