import React from "react";
import { Link } from "react-router-dom";
import loanEaseLogo from "../LoanEaseLogo-White.png";
import user from "../User.png";
import MyProfileSettings from "./MyProfileSettings";

import "./MyProfile.css";

const MyProfile = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="welcomeMsg">
            <img src={loanEaseLogo} height="100" width="200" />
            <div>
              <h1>My Profile</h1>
              <img src={user} height="150" width="150" />
              <h4>James Forbes</h4>
              <p>BCIT</p>
            </div>
            <div className="welcomeMsg">
              <h4>Contact</h4>
              <div>Phone Number - (778) 456 9325</div>
              <div>Email ID:- forbes.james@outlook.com</div>
              <div>Address:- 52nd Avenue, Hastings St., Vancouver, BC.</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="auth-form-container">
            <hr />
            <h3>About Me:-</h3>
            <p>
              A highly motivated person, ambitious to develop experiences on
              discovering skills and pursuing to get scholarship for achieving
              career goals. Good at academic skills and athlete.
            </p>
            {/* <h3>Skills:-</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Branding</li>
              <li>Problem Solving</li>
              <li>Multitasker</li>
              <li>Public Speaking</li>
            </ul> */}

            {/* Buttons in the right column */}
            <div className="d-flex flex-wrap">
              <button className="submit-3X" type="submit-3X">
                {" "}
                <Link to="/MyProfileSettings" className="no-underline-link">
                  Profile
                </Link>
              </button>
     <button className="submit-3X" type="submit-3X">
          {" "}
          <Link to="/PaymentMethod" className="no-underline-link">
            Payment Method
          </Link>
        </button>
        <button className="submit-3X" type="submit-3X">
          {" "}
          <Link to="/LoanList" className="no-underline-link">
            List of Loans
          </Link>
        </button>
        <button className="submit-3X" type="submit-3X">
          {" "}
          <Link to="/NewsList" className="no-underline-link">
            NewsList
          </Link>
        </button>
        <button className="submit-3X" type="submit-3X">
          {" "}
          <Link to="/LoanCalculator" className="no-underline-link">
            LoanCalculator
          </Link>
        </button>
        <button className="submit-3X" type="submit-3X">
          {" "}
          <Link to="/Statement" className="no-underline-link">
            Statements
          </Link>
        </button>
        <button className="submit-3X" type="submit-3X">
          {" "}
          <Link to="/Pay" className="no-underline-link">
            My Pay
          </Link>
        </button>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
