import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import user from "./Ellipse.png";
import loanEaseLogoWhite from "../../LoanEaseLogo-White.png";
import "./SidebarMenu.css";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`col-auto col-lg-2 col-md-3 col-sm-4 min-vh-100 d-flex flex-column position-fixed Sidebar ${isSidebarOpen ? 'show' : ''}`} style={{ backgroundColor: "#2267CA", paddingTop: "4rem", paddingLeft: "0", paddingRight: "0" }}>
      <button className="btn btn-primary bgcolor-primary d-md-none d-lg-none" onClick={toggleSidebar}>
        <i className={`bi ${isSidebarOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>
      <div className=''>
        <div className="d-flex align-items-center justify-content-center mb-4 mt-auto">
          <img src={user} alt="Your Alt Text" className="rounded-circle" />
        </div>
        <hr className="text-secondary d-none d-md-block" />
        <ul className="nav nav-pills flex-column mt-3 mt-md-0 d-flex align-items-left justify-content-center">
          <li className="nav-item text-white fs-5 my-2">
            <Link to="/home" className="nav-link " aria-current="page">
              <i className="bi bi-house" style={{ color: "white" }}></i>
              <span className="ms-3 text-white text-size-md">
                Home
              </span>
            </Link>
          </li>
          <li className="nav-item text-white fs-5 my-2">
            <Link to="/LatestNews" className="nav-link " aria-current="page">
              <i className="bi bi-flag" style={{ color: "white" }}></i>
              <span className="ms-3 text-white text-size-md">
                Latest News
              </span>
            </Link>
          </li>
          <li className="nav-item text-white fs-5 my-2">
            <Link to="/LoanAdvice" className="nav-link " aria-current="page">
              <i className="bi bi-info-circle" style={{ color: "white" }}></i>
              <span className="ms-3 text-white text-size-md">
                Get Advice
              </span>
            </Link>
          </li>
          <li className="nav-item text-white fs-5 my-2">
            <Link to="/LoanList" className="nav-link " aria-current="page">
              <i className="bi bi-cursor" style={{ color: "white" }}></i>
              <span className="ms-3 text-white text-size-md">
                Get your ease
              </span>
            </Link>
          </li>
          <li className="nav-item text-white fs-5 my-2">
            <Link to="/MyProfileSettings" className="nav-link " aria-current="page">
              <i className="bi bi-gear" style={{ color: "white" }}></i>
              <span className="ms-3 text-white text-size-md">
                Settings
              </span>
            </Link>
          </li>
          <li className="nav-item text-white fs-5 my-2">
            <Link to="#" className="nav-link " aria-current="page">
              <i className="bi bi-box-arrow-left" style={{ color: "white" }}></i>
              <span className="ms-3 text-white text-size-md">
                Log Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-4 mt-auto">
        <img className="logo-Sidebar d-flex d-none d-md-inline align-item-center" src={loanEaseLogoWhite} alt="LoanEase Logo" />
      </div>
    </div>
  );
};

export default Sidebar;





