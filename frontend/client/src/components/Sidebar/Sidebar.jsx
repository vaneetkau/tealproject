import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import { Link } from "react-router-dom";
import LatestNews from "../LatestNews/LatestNews";
import "./SidebarMenu.css";

import loanEaseLogoWhite from "../../LoanEaseLogo-White.png";
import user from "./Ellipse.png"

import "bootstrap/js/dist/dropdown";


const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
       <div className={`col-auto col-lg-2 col-md-2 col-sm-auto min-vh-100 d-flex flex-column position-fixed Sidebar ${isSidebarOpen ? 'show' : ''}`} style={{backgroundColor:"#2267CA", paddingTop:"4rem", paddingLeft:"0", paddingRight:"0"}}>
        {/* Hamburger Button for Small Screens */}
        <button className="btn btn-primary bgcolor-primary d-md-none d-lg-none" onClick={toggleSidebar}>
        <i className={`bi ${isSidebarOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>   
       {/* Sidebar */}
        <div className=''>
        <div className="d-flex align-items-center justify-content-center mb-4 mt-auto">
                      <img src={user} alt="Your Alt Text" className="rounded-circle" />
          </div>
              <hr className="text-secondary d-none d-md-block" />
              <ul className="nav nav-pills flex-column mt-3 mt-md-0 d-flex align-items-left justify-content-center">
                <li className="nav-item text-white fs-4 my-1 py-2 py-md-0 ">
                  <Link to="/home" className="nav-link " aria-current="page">
                    <i className="bi bi-house" style={{ color: "white" }}></i>
                    <span className="ms-3 text-white text-size">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-md-0 ">
                  <Link to="/LatestNews" className="nav-link " aria-current="page">
                    <i className="bi bi-flag" style={{ color: "white" }}></i>
                    <span className="ms-3 text-white text-size">
                      Latest News
                    </span>
                  </Link>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-md-0 ">
                  <Link to="/LoanAdvice" className="nav-link " aria-current="page">
                    <i
                      className="bi bi-info-circle"
                      style={{ color: "white" }}
                    ></i>
                    <span className="ms-3 text-white text-size">
                      Get Advice
                    </span>
                  </Link>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-md-0 ">
                  <Link to="/LoanList" className="nav-link " aria-current="page">
                    <i className="bi bi-cursor" style={{ color: "white" }}></i>
                    <span className="ms-3 text-white text-size">
                      Get your ease
                    </span>
                  </Link>
                </li>
                <li className="nav-item text-white fs-4 my-1 py-2 py-md-0 ">
                  <Link to="/MyProfileSettings" className="nav-link " aria-current="page">
                    <i className="bi bi-gear" style={{ color: "white" }}></i>
                    <span className="ms-3 text-white text-size">
                      Settings
                    </span>
                  </Link>
                </li>
                                        {/* <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/Overview" className="nav-link " aria-current="page">
                <i className="bi bi-gear" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Overview
                </span>
              </Link>
            </li>
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/Pay" className="nav-link " aria-current="page">
                <i className="bi bi-gear" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Pay
                </span>
              </Link>
            </li>
                        <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/Statement" className="nav-link " aria-current="page">
                <i className="bi bi-gear" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Statement
                </span>
              </Link>
            </li> */}
                <li className="nav-item text-white fs-4 my-1 py-2 py-md-0 ">
                  <Link to="#" className="nav-link " aria-current="page">
                    <i
                      className="bi bi-box-arrow-left"
                      style={{ color: "white" }}
                    ></i>
                    <span className="ms-3 text-white text-size">
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
    </>
  );
};

export default Sidebar;
