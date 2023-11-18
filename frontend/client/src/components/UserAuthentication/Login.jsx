import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from '../../firebase';
import Sidebar from '../Sidebar/Sidebar';
import MyProfile from "../MyProfile";
// import "./Login.css"

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
            .then(value => { 
                alert("Successfully Loggedin")
                navigate("/Sidebar") 
                navigate("/MyProfile") 
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
        <div className="container-fluid">

        <div className="row">
           <div className="col-sm-12 col-md-6 welcomeMsg">
                <h1 className="pt-4">Hello Again!</h1>
                <h3 className="lead display-6">We are Thrilled to see you around,  to continue please <label className="link-btn">Log in</label> or <label className="link-btn" onClick={() => props.onFormSwitch('register')}>Sign up!</label></h3>
                <h1>Loanease Logo</h1>
            </div>
            <div className="col-sm-12 col-md-6 auth-form-container">
                <form className="login-form p-4" onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <label htmlFor="email" className="form-label fs-5">Email Address</label>
                    <input
                        value={email}
                        onChange={handleEmailOnChange}
                        type="email"
                        placeholder="example@email.com"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password" className="form-label fs-5">Password</label>
                    <input
                        value={password}
                        onChange={handlePasswordOnChange}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                        autoComplete="current-password"

                    />
                    <label className="link-btn fs-6" style={{color:"#FFB700", fontSize: "13px", fontWeight: "600"}}>Forget Password?</label>
                    <button className="submit-3X" type="submit">LOGIN</button>
                </form>
                <p className="p-4">Don't have an account? <label className="link-btn" onClick={() => props.onFormSwitch('register')}>Sign up here!</label></p>
            </div>
            

        </div>
                </div>

 

        </>
    );
}

export default Login;





