import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import Sidebar from "../Sidebar/Sidebar";
import MyProfile from "../MyProfile";
import loanEaseLogo from "../../LoanEaseLogo-White.png";

import Button from "react-bootstrap/Button";


const auth = getAuth(app);

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Successfully Loggedin");
        navigate("/Sidebar");
        navigate("/MyProfile");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Login failed");
      });
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

  return (
    <>
      <div className="container-fluid vh-100 p-0 bg-primary">
        <div className="row h-100 m-0">
          {/* Left Column (25%) */}
          <div
            className="col-3 d-flex flex-column text-white p-3 flex-fill align-items-center align-items-start p-4 mt-3"
            style={{ maxWidth: "50rem" }}
          >
            <img
              src={loanEaseLogo}
              height="100"
              width="160"
              alt="LoanEase Logo"
            />
            <div className="d-flex flex-column align-items-start justify-content-between flex-fill">
              <div className="mx-auto my-auto text-center">
                <h1>Welcome Back!</h1>
                <p>Please log in to continue.</p>
              </div>
            </div>
          </div>

          {/* Right Column (75%) */}
          <div
            className="col-9 d-flex flex-column bg-white text-black p-0 flex-fill h-100"
            style={{
              borderTopLeftRadius: "80px",
              borderBottomLeftRadius: "80px",
            }}
          >
            {" "}
            <div
              className="justify-content-between align-items-center text-black text-center p-2 m-2 mx-auto my-auto"
              style={{ maxWidth: "75%" }}
            >
              <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
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
                <label
                  className="link-txt"
                  style={{
                    color: "#FFB700",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Forgot Password?
                </label>
                  <Link to="/MyProfile" className="no-underline-link " size="lg">
                <Button variant="primary" size="lg" className="mb-2">
                    Login
                </Button>
                  </Link>
              </form>
              <p>
                Don't have an account?{" "}
                <label
                  className="link-txt"
                  onClick={() => props.onFormSwitch("register")}
                  style={{
                    color: "#FFB700",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  Sign up here!
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
