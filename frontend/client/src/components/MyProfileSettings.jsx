import React, { useState } from 'react'
import loanEaseLogo from "../LoanEaseLogo-White.png";
import user from "../User.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from '../firebase';
import Sidebar from './Sidebar/Sidebar';
import MyProfile from "./MyProfile";

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
      <div className='container-white-background'>
        <h2>Profile Settings</h2>
        <div className='half-screen'>
          <div className="half-screen-container">
              <form className="login-form" onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <label htmlFor="email">Email Address</label>
                    <input
                        value={email}
                        onChange={handleEmailOnChange}
                        type="email"
                        placeholder="example@email.com"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={handlePasswordOnChange}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                        autoComplete="current-password"
                    />
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        value={mobileNumber}
                        onChange={handleMobileNumberOnChange}
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        maxLength={10}
                    />
                    <button className="submit-2X" type="submit">Save</button>
              </form>          
          </div>
          <div className="half-screen-container">
              <p>Profile Picture</p>
              <img src={user} height="200" width="200"/>
              <p>Recommend profile image size maximum 250kb with 150px X 150 px resolution.</p>
              <button className="submit-2X" type="submit">Upload Profile Picture</button>
            </div>           
        </div>
        <div className='container-flex-row'>
        <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Save Changes</Link></button>
        <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Discard Changes</Link></button>

        </div>
      <div className='footer'>
        <br />
        <br />
        <hr />
        <h1>I'm Footer</h1>
      </div>
      </div>
    </>
  )
}

export default MyProfileSettings
