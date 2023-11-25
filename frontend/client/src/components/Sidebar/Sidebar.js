import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import './SidebarMenu.css';
import loanEaseLogo from '../../LoanEaseLogo-White.png';
import sidebarProfile from "../../sidebarProfile.png"
import { Link } from 'react-router-dom';
// import LatestNews from "../LatestNews/LatestNews";

const Sidebar = () => {
  
  return (
    <>
      <div
        className="position-fixed top-0 start-0 bottom-0 col-auto col-md-3 d-flex justify-content-start flex-column"
        style={{ backgroundColor: '#2267CA', width: '250px' }}
      >
        <div>
          <img
            className="rounded-circle mx-auto my-4"
            src={sidebarProfile}
            alt="LoanEase Logo"
          />

          <hr className="text-secondary d-none d-sm-block" />
          <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/home" className="nav-link " aria-current="page">
                <i className="bi bi-house" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/LatestNews" className="nav-link " aria-current="page">
                <i className="bi bi-flag" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Latest News
                </span>
              </Link>
            </li>
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/LoanAdvice" className="nav-link " aria-current="page">
                <i className="bi bi-info-circle" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Get Advice
                </span>
              </Link>
            </li>
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="/LoanList" className="nav-link " aria-current="page">
                <i className="bi bi-cursor" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Get your ease
                </span>
              </Link>
            </li>
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="#" className="nav-link " aria-current="page">
                <i className="bi bi-gear" style={{ color: 'white' }}></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Settings
                </span>
              </Link>
            </li>
            <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <Link to="#" className="nav-link " aria-current="page">
                <i
                  className="bi bi-box-arrow-left"
                  style={{ color: 'white' }}
                ></i>
                <span className="ms-3 d-none d-sm-inline text-white text-size">
                  Log Out
                </span>
              </Link>
            </li>
          </ul>
          <img
            className="d-flex d-none d-sm-inline align-item-center m-4"
            src={loanEaseLogo}
            height="100"
            width="160"
            alt="LoanEase Logo"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
