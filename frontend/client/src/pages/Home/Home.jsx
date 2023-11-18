import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {
  const [user, setUser] = useState({
    name: 'Camila',
    nextPayment: '9th November',
    interestRate: '5%',
    creditScore: '700',
  });

  return (
    <div className="App">
            <div className="sidebar">
        <Sidebar />
      </div>
      <header className="App-header">
        <h1>Welcome {user.name}!</h1>
        <p>
          You are up to date with your payments, your next payment will be{' '}
          {user.nextPayment}.
        </p>
        <p>Interest rate: {user.interestRate}</p>
        <p>Credit Score: {user.creditScore}</p>
      </header>

      {/* <div className="calculator">
        <Calculator />
      </div> */}
    </div>
  );
}

export default Home;