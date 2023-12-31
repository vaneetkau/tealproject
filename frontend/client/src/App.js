import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/UserAuthentication/Login";

import HeroSection from "./components/LandingPage/HeroSection";
import AboutPage from "./components/LandingPage/AboutPage";
import FaqPage from "./components/LandingPage/FaqPage";
import TandCPage from "./components/LandingPage/TandCPage";
import Contact from "./components/LandingPage/Contact";
import LatestNews from "./components/LatestNews/LatestNews";
import LoanAdvice from "./components/LoanAdvice/LoanAdvice";
import LoanList from "./components/LoanTest/LoanList";
import MyProfileSettings from "./components/MyProfileSettings";
import Overview from "./components/Overview/Overview";
import Pay from "./components/Pay/Pay";
import Statement from "./components/Statement/Statement";
import MyProfile from "./components/MyProfile";
import Register from "./components/UserAuthentication/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  // Function to switch between login and register forms
  const handleFormSwitch = (formType) => {
    setCurrentForm(formType);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/FaqPage" element={<FaqPage />} />
          <Route path="/TandCPage" element={<TandCPage />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Sidebar" element={<Sidebar />} />

          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/LatestNews" element={<LatestNews />} />
          <Route path="/LoanAdvice" element={<LoanAdvice />} />
          <Route path="/LoanList" element={<LoanList />} />
          <Route path="/MyProfileSettings" element={<MyProfileSettings />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Pay" element={<Pay />} />
          <Route path="/Statement" element={<Statement />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
