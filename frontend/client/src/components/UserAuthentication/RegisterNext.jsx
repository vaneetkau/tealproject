import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };
  const handleNameOnChange = (e) => {
    e.preventDefault();
    console.log("On Change");
    setName(e.target.value);
  };
  const handleEmailOnChange = (e) => {
    e.preventDefault();
    console.log("On Change");
    setEmail(e.target.value);
  };
  const handlePassOnChange = (e) => {
    e.preventDefault();
    console.log("On Change");
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="welcomeMsg">
        <h1>Hello Again!</h1>
        <p>
          We are Thrilled to see you around, to continue please{" "}
          <label className="link-btn">Log in</label> or{" "}
          <label
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Sign up!
          </label>
        </p>
        <h1>Loanease Logo</h1>
      </div>
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>SIGN UP</h2>
          <label>Full Name</label>
          <input
            value={name}
            onChange={handleNameOnChange}
            name="name"
            id="name"
            placeholder="Full Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleEmailOnChange}
            type="email"
            placeholder="Enter your email here"
            id="email"
            name="email"
            required
          />
          <p></p>
          {/* <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={handlePassOnChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          /> */}
          <button className="submit" onClick={handleSubmit} type="submit">
            NEXT
          </button>
        </form>
        <p>Already have an account? <label className="link-btn" onClick={() => props.onFormSwitch("login")}> Login here!</label></p>
      </div>
    </>
  );
};
