import React from "react";
import { Link } from "react-router-dom";
import loanEaseLogo from "../LoanEaseLogo-White.png";
import user from "../User.png";
import MyProfileSettings from "./MyProfileSettings";
import PaymentMethod from "../pages/Pay/PaymentMethod";
import Sidebar from "./Sidebar/Sidebar";
import Statement from "../pages/Statement/Statement";
import Pay from "../pages/Pay/Pay";
import LoanList from "./LoanTest/LoanList";
import NewsList from "./NewsList";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyProfile = (props) => {
  return (
    <>
      <div className="container-fluid vh-100 vw-100 p-0 bg-primary">
        <div className="row h-100 m-0">
          {/* Left Column (25%) */}
          <div className="col-3 d-flex flex-column text-white p-3 flex-fill align-items-center align-items-start p-4 mt-3"
          style={{ maxWidth: "20rem" }}>
            <img
              src={loanEaseLogo}
              height="100"
              width="160"
              alt="LoanEase Logo"
            />
            <div className="d-flex flex-column align-items-start justify-content-between flex-fill">
            <div className="mx-auto my-auto text-center">
                <h1>My Profile</h1>
                <img src={user} height="150" width="150" alt="User Avatar" />
                <h4>James Forbes</h4>
                <p>BCIT</p>
              </div>
              <div className="text-center">
                <h4>Contact</h4>
                <div>Phone Number - (778) 456 9325</div>
                <div>Email ID:- forbes.james@outlook.com</div>
                <div>Address:- 52nd Avenue, Hastings St., Vancouver, BC.</div>
              </div>
            </div>
          </div>

          {/* Right Column (75%) */}
          <div
            className="col-9 d-flex flex-column bg-white text-black p-0 flex-fill h-100"
            style={{ borderTopLeftRadius: "80px", borderBottomLeftRadius: "80px" }}
          >
            <div className="justify-content-between align-items-center text-black text-center p-2 m-2 mx-auto my-auto"
            style={{ maxWidth: "75%" }}>
              <h3>About Me:-</h3>
              <p>
                A highly motivated person, ambitious to develop experiences on
                discovering skills and pursuing to get scholarship for achieving
                career goals. Good at academic skills and athlete.
              </p>
              <div className="flex-column d-flex">
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/MyProfileSettings" className="no-underline-link">
                    Profile
                  </Link>
                </Button>
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/PaymentMethod" className="no-underline-link">
                    Payment Method
                  </Link>
                </Button>
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/LoanList" className="no-underline-link">
                    List of Loans
                  </Link>
                </Button>
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/NewsList" className="no-underline-link">
                    NewsList
                  </Link>
                </Button>
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/LoanCalculator" className="no-underline-link">
                    LoanCalculator
                  </Link>
                </Button>
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/Statement" className="no-underline-link">
                    Statements
                  </Link>
                </Button>
                <Button variant="primary" size="lg" className="mb-2">
                  {" "}
                  <Link to="/Pay" className="no-underline-link">
                    My Pay
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
