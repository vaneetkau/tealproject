import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import loanEaseLogo from "../../LoanEaseLogo-White.png";
import Button from "react-bootstrap/Button";
import Register from "./Register";

import "./Login.css";

const auth = getAuth(app);

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);

    if (!isValidEmail) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Attempting login with Email:", email, "Password:", password);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Successfully Loggedin");
        console.log("Navigating to /Home");
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed");
      });
  };

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container-fluid vh-100 p-0 bg-primary">
      <div className="row vh-100 m-0">
        <div className="col-lg-4 col-md-4 d-flex flex-column text-white p-3 flex-fill align-items-center align-items-start p-4 mt-3 container-left-parent">
          <div className="mx-auto my-auto text-center d-flex flex-column justify-content-around align-items-center custom-left-container">
            <img src={loanEaseLogo} className="d-inline-block align-top logo_LoanEase img-fluid px-2 d-md-none mb-4" style={{ maxWidth: "130px", padding: "10px" }} alt="LoanEase Logo" />
            <h1 className="mb-4">Hello Again!</h1>
            <p className="mb-4 responsive-text">We are thrilled to see you around, to continue please Log in or Sign up!</p>
            <img src={loanEaseLogo} className="d-none d-md-inline-block align-top logo_LoanEase img-fluid px-2" style={{ maxWidth: "180px", padding: "10px" }} alt="LoanEase Logo" />
          </div>
        </div>

        <div className="col-lg-8 col-md-8 d-flex flex-column bg-white text-black p-0 flex-fill justify-content-center align-items-center custom-container-border">
          <div className="mx-auto my-auto container-fluid d-flex flex-column justify-content-center align-items-center text-black text-center p-2 m-2 mx-auto">
            <h2 className="display-4 display-md-3" style={{ color: "#2267CA" }}>
              Login
            </h2>
            <form className="container login-form mb-4" onSubmit={handleSubmit}>
              <label htmlFor="email" className="text-left">
                Email Address
              </label>
              <input value={email} onChange={handleEmailOnChange} type="email" placeholder="example@email.com" id="email" name="email" className="form-control" autoComplete="email" />
              <label htmlFor="password" className="text-left">
                Password
              </label>
              <input value={password} onChange={handlePasswordOnChange} type="password" placeholder="********" id="password" name="password" autoComplete="current-password" className="form-control" />
              <label className="link-txt text-left" style={{ color: "#FFB700", fontSize: "13px", fontWeight: "600" }}>
                Forgot Password?
              </label>
              <Button type="submit" variant="primary" size="lg" className="mb-2 mx-4" style={{ borderRadius: "25px" }}>
                LOGIN
              </Button>
            </form>
            <p>
              Don't have an account?{" "}
              <Link className="link-txt" onClick={() => props.onFormSwitch("Register")} style={{ color: "#FFB700", fontSize: "13px", fontWeight: "600" }}>
                Sign up here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
