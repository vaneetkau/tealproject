import React from "react";
import { useNavigate, Link } from "react-router-dom";
import loanEaseLogo from "../LoanEaseLogo-White.png";
import user from "../User.png";


export const MyProfile = (props) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/MyProfileSettings") 
    };

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

        <button className="submit" type="submit"> <Link to="./MyProfileSettings">Profile</Link></button>
      </div>
    </>
  );
};
