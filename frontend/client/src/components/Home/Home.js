import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3" style={{paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <h1>This is the Home page after login.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
