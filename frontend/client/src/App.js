import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LoanAdvice from './components/LoanAdvice/LoanAdvice';
import LatestNews from './components/LatestNews/LatestNews';
import Login from "./components/UserAuthentication/Login";
import Register from "./components/UserAuthentication/Register";
import MyProfile from "./components/MyProfile";
import LoanList from "./components/LoanTest/LoanList";
import Sidebar from './components/Sidebar/Sidebar';
import MyProfileSettings from "./components/MyProfileSettings";
import PaymentMethod from "./pages/Pay/PaymentMethod";
import Statement from "./pages/Statement/Statement";
import Pay from "./pages/Pay/Pay";
import News from "./components/News/News";
import LoanCalculator from "./components/LoanCal";
import Overview from "./pages/Overview/Overview";
import NotFound from "./pages/NotFound/NotFound";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const auth = getAuth(app);

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const auth = getAuth(app);                                                                    //firebase authentication

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  const signupPage = () => {
    createUserWithEmailAndPassword(
      auth, 
      "Noyal Godara",
      "noyal@xyz.com",
      "6789@noyal"
    ).then((value) => console.log(value));
  }
  return (
    <Router>
      <div className="App">

                      <ErrorBoundary>
        <Routes>

          <Route path="/" element={ <HeroSection />}
          />
          <Route path='/Home' element={<Home/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FaqPage" element={<FaqPage />} />
          <Route path="/TandCPage" element={<TandCPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}
export default App;

