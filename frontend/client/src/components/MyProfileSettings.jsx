import React, { useState } from "react";
import loanEaseLogo from "../LoanEaseLogo-White.png";
import user from "../User.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import Sidebar from "./Sidebar/Sidebar";
import MyProfile from "./MyProfile";
// import TempNavBar from "./TempNavBar";


const auth = getAuth(app);

const MyProfileSettings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const handleSubmit = (e) => {
    // ##############################################
    // #########Update Profile on Firebase###########
    // ##############################################
  };

  const handleEmailOnChange = (e) => {
    e.preventDefault();
    console.log("On Change");
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    e.preventDefault();
    console.log("On Change");
    setPassword(e.target.value);
  };
  const handleMobileNumberOnChange = (e) => {
    e.preventDefault();
    console.log("On Change");
    setMobileNumber(e.target.value);
  };

  return (
    <>
    <div className="container-fluid mt-4">
      <h1 className="text-center">Profile Settings</h1>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="border border-dark rounded p-3 bg-white">
            <h2>Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  className="form-control"
                  value={email}
                  onChange={handleEmailOnChange}
                  type="email"
                  placeholder="example@email.com"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  className="form-control"
                  value={password}
                  onChange={handlePasswordOnChange}
                  type="password"
                  placeholder="********"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                <input
                  className="form-control"
                  value={mobileNumber}
                  onChange={handleMobileNumberOnChange}
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  maxLength={10}
                />
              </div>
              <button type="button" className="btn btn-primary">
                Save Data
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          <div className="border border-dark rounded p-3 bg-white">
            <h2>Profile Picture</h2>
            <img src={user} className="img-fluid rounded-circle mb-3" alt="Profile" />
            <p>
              Recommend profile image size maximum 250kb with 150px X 150 px
              resolution.
            </p>
            <button type="button" className="btn btn-primary">
              Upload Profile Picture
            </button>
          </div>
        </div>
      </div>

      {/* Save and Discard Changes Buttons */}
      <div className="text-center mt-4">
        <button type="button" className="btn btn-primary mx-2">
          <Link to="/MyProfile" className="link-btn text-truncate">Save Changes</Link>
        </button>
        <button type="button" className="btn btn-primary mx-2">
          <Link to="/home" className="link-btn text-truncate">Discard Changes</Link>
        </button>
      </div>
    </div>

    {/* Footer */}
    <footer className="footer mt-auto py-3 bg-primary fixed-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left side with logo */}
        <div className="footer-left">
          <img
            src={loanEaseLogo}
            height="100"
            width="160"
            alt="LoanEase Logo"
          />
        </div>

        {/* Center with copyright and text */}
        <div className="footer-center text-center">
          <p style={{ color: '#FFB700' }}>
            &copy; 2023 LoanEase | All Rights Reserved
          </p>
        </div>

        {/* Right side */}
        <div className="footer-right"></div>
      </div>
    </footer>
  </>
  );
};

export default MyProfileSettings;