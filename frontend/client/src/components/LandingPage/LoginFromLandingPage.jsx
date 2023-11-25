import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";                      //firebase authentication
import { app } from '../../firebase'                                                              //firebase
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";                    //React-Router-DOM
// import '../../App.css';
import Login from "../UserAuthentication/Login"
import Register from "../UserAuthentication/Register"
import MyProfile from "../MyProfile"
import LoanList from "../LoanTest/LoanList";
import Sidebar from '../Sidebar/Sidebar';
import MyProfileSettings from "../MyProfileSettings";
import PaymentMethod from "../../pages/Pay/PaymentMethod";
import Statement from "../../pages/Statement/Statement";
import Pay from "../../pages/Pay/Pay";
import NewsList from "../NewsList";
import LoanCalculator from "../LoanCal";

const auth = getAuth(app);                                                                    //firebase authentication

function LoginFromLandingPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  const signupPgae = () => {
    createUserWithEmailAndPassword(
      auth,
      "Noyal Godara",
      "noyal@xyz.com",
      "6789@noyal"
    ).then((value) => console.log(value));
  }

  return (

    <>
      <Router>

        <div className="App">
        <Routes>
          { currentForm === "login" ? (
            <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
          ) : (
            <Route path="/" element={<Register onFormSwitch={toggleForm} />} />
          )}
            <Route path="/Sidebar" element={<Sidebar/>} />
            <Route path="/MyProfile" element={<MyProfile/>} />
            <Route path="/MyProfileSettings" element={<MyProfileSettings/>} />
            <Route path="/PaymentMethod" element={<PaymentMethod/>} />
            <Route path="/Statement" element={<Statement/>} />
            <Route path="/Pay" element={<Pay/>} />
            <Route path="/LoanList" element={<LoanList/>} />
            <Route path="/NewsList" element={<NewsList newsType="loan-news"/>} />
            <Route path="/LoanCalculator" element={<LoanCalculator/>} />

        </Routes>
          </div>
      </Router>
    </>

  );
}

export default LoginFromLandingPage;
