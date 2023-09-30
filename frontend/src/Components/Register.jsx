import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'

const auth = getAuth(app);

export const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password).then((value => alert("Success")))
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


    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input value={name} onChange={handleNameOnChange} name="name" id="name" placeholder="Full Name" required/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={handleEmailOnChange} type="email" placeholder="Enter your email here" id="email" name="email" required/>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePassOnChange} type="password" placeholder="********" id="password" name="password" required/>
                <button onClick={handleSubmit} type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}