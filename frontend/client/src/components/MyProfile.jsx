import React from "react";
import { Link } from "react-router-dom";
import loanEaseLogo from "../LoanEaseLogo-White.png";
import user from "../User.png";
import MyProfileSettings from "./MyProfileSettings";
import PaymentMethod from "../pages/Pay/PaymentMethod";
import Sidebar from "./Sidebar/Sidebar";
import Statement from "../pages/Statement/Statement";
import Pay from "../pages/Pay/Pay";

const MyProfile = (props) => {

  return (
    <>
      <div className="welcomeMsg">
        <img src={loanEaseLogo} height="100" width="200"/>
        <div>
            <h1>My Profile</h1>
            <img src={user} height="150" width="150"/>
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
      <div className="auth-form-container">
        <h3>About Me:-</h3>
        <p>
          A highly motivated person, ambitious to develop experiences on
          discovering skills and pursuing to get scholarship for achieving
          career goals. Good at academic skills and athlete.
        </p>
        <hr />
        <h3>Skills:-</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>Branding</li>
          <li>Problem Solving</li>
          <li>Multitasker</li>
          <li>Public Speaking</li>
        </ul>

        <button className="submit-3X" type="submit-3X"> <Link to="/MyProfileSettings" className="no-underline-link">Profile</Link></button>
        <button className="submit-3X" type="submit-3X"> <Link to="/PaymentMethod" className="no-underline-link">Temp to Payment Method</Link></button>
        <button className="submit-3X" type="submit-3X"> <Link to="/Sidebar" className="no-underline-link">Temp to Sidebar</Link></button>
        <button className="submit-3X" type="submit-3X"> <Link to="/Statement" className="no-underline-link">Temp to Statements</Link></button>
        <button className="submit-3X" type="submit-3X"> <Link to="/Pay" className="no-underline-link">Temp to My Pay</Link></button>
      </div>
    </>
  );
};

export default MyProfile
