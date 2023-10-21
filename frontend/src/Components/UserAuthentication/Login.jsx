import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from '../../firebase';

const auth = getAuth(app);

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(auth, email, password)
        .then(value => { 
            alert("Successfully Loggedin")
            navigate("/MyProfile") 
        })
        .catch((error) => {
            alert("Login failed");
        })
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
        <div className="welcomeMsg">
            <h1>Hello Again!</h1>
            <p>We are Thrilled to see you around, to continue please <label className="link-btn">Log in</label> or <label className="link-btn" onClick={() => props.onFormSwitch('register')}>Sign up!</label></p>
            <h1>Loanease Logo</h1>
        </div>
        <div className="auth-form-container">
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
                />
                <label className="link-btn" style={{color:"#FFB700", fontSize: "13px", fontWeight: "600"}}>Forget Password?</label>
                <button className="submit" type="submit">LOGIN</button>
            </form>
            <p>Don't have an account? <label className="link-btn" onClick={() => props.onFormSwitch('register')}>Sign up here!</label></p>
        </div>
        </>
    );
};
