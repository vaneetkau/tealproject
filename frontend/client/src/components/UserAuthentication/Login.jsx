import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import loanEaseLogo from "../../LoanEaseLogo-White.png";
import Button from "react-bootstrap/Button";
import Register from "./Register";

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

    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Successfully Loggedin");
        navigate("/Sidebar");
        navigate("/Home");
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
      <div className="row h-100 m-0">
        <div className="col-lg-3 col-md-6 d-flex flex-column text-white p-3 flex-fill align-items-center align-items-start p-4 mt-3">
          <img src={loanEaseLogo} height="100" width="160" alt="LoanEase Logo" />
          <div className="d-flex flex-column align-items-start justify-content-between flex-fill">
            <div className="mx-auto my-auto text-center">
              <h1>Welcome Back!</h1>
              <p>Please log in to continue.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-md-6 d-flex flex-column bg-white text-black p-0 flex-fill h-100" style={{ borderTopLeftRadius: "80px", borderBottomLeftRadius: "80px" }}>
          <div className="justify-content-between align-items-center text-black text-center p-2 m-2 mx-auto my-auto" style={{ maxWidth: "75%" }}>
            <h2 className="display-4 display-md-3">Login</h2>
            <form className="login-form d-flex flex-column align-items-left mt-md-0 mt-4" onSubmit={handleSubmit}>
              <label htmlFor="email" className="text-left">Email Address</label>
              <input
                value={email}
                onChange={handleEmailOnChange}
                type="email"
                placeholder="example@email.com"
                id="email"
                name="email"
                className="form-control mb-3"
              />
              <label htmlFor="password" className="text-left">Password</label>
              <input
                value={password}
                onChange={handlePasswordOnChange}
                type="password"
                placeholder="********"
                id="password"
                name="password"
                autoComplete="current-password"
                className="form-control mb-3"
              />
              <label className="link-txt text-left" style={{ color: "#FFB700", fontSize: "13px", fontWeight: "600" }}>Forgot Password?</label>
              <Link to="/Home" className="no-underline-link text-left">
                <Button variant="primary" size="lg" className="mb-2">Login</Button>
              </Link>
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
