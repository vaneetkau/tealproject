import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import LoanCalculator from '../LoanCal';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3" style={{ paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <h1 className="mb-4">Empower Your Financial Planning</h1>
          <LoanCalculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
