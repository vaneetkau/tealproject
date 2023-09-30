import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={handleEmailOnChange}
                    type="email"
                    placeholder="Enter your email here"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    onChange={handlePassOnChange}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </>
    );
};
