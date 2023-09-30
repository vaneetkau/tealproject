import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    };
    const handleEmailOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setEmail(e.target.value);
    };
    const handlePassOnChange = (e) => {
        e.preventDefault();
        console.log("On Change");
        setPass(e.target.value);
    };

    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input value={name} onChange={handleEmailOnChange} name="name" id="name" placeholder="Full Name"/>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={handleEmailOnChange} type="email" placeholder="Enter your email here" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={handlePassOnChange} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}