import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#2267CA" }}>
      <div className="row">
        <div className="col-lg-2 col-md-3 m-0 p-0" style={{ paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 m-0 p-0">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
