
// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";                      //firebase authentication
// import { app } from './firebase'                                                              //firebase
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";                    //React-Router-DOM
// import './App.css';
// import Login from "./components/UserAuthentication/Login"
// import Register from "./components/UserAuthentication/Register"
// import MyProfile from "./components/MyProfile"
// import LoanList from "./components/LoanTest/LoanList";
// import Sidebar from './components/Sidebar/Sidebar';
// import MyProfileSettings from "./components/MyProfileSettings";
// import PaymentMethod from "./pages/Pay/PaymentMethod";
// import Statement from "./pages/Statement/Statement";
// import Pay from "./pages/Pay/Pay";
// import NewsList from "./components/NewsList";
// import LoanCalculator from "./components/LoanCal";


// const auth = getAuth(app);                                                                    //firebase authentication



// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (forName) => {
//     setCurrentForm(forName);
//   }
//   const signupPgae = () => {
//     createUserWithEmailAndPassword(
//       auth, 
//       "Noyal Godara",
//       "noyal@xyz.com",
//       "6789@noyal"
//     ).then((value) => console.log(value));
//   }

//   return (

//     <>
//       <Router>
        
//         <div className="App">
//         <Routes>
//           { currentForm === "login" ? (
//             <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
//           ) : (
//             <Route path="/" element={<Register onFormSwitch={toggleForm} />} />
//           )}
//             <Route path="/Sidebar" element={<Sidebar/>} />
//             <Route path="/MyProfile" element={<MyProfile/>} />
//             <Route path="/MyProfileSettings" element={<MyProfileSettings/>} />
//             <Route path="/PaymentMethod" element={<PaymentMethod/>} />
//             <Route path="/Statement" element={<Statement/>} />
//             <Route path="/Pay" element={<Pay/>} />
//             <Route path="/LoanList" element={<LoanList/>} />
//             <Route path="/NewsList" element={<NewsList newsType="loan-news"/>} />
//             <Route path="/LoanCalculator" element={<LoanCalculator/>} />
          
//         </Routes>
//           </div>
//       </Router>
//     </>

//   );
// }

// export default App;


// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import HeroSection from './components/LandingPage/HeroSection';
import Footer from './components/LandingPage/Footer';
import AboutPage from './components/LandingPage/AboutPage'
import FaqPage from './components/LandingPage/FaqPage';
import TandCPage from './components/LandingPage/TandCPage';
import Contact from './components/LandingPage/Contact';
import Login from './components/UserAuthentication/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <HeroSection />
                <Footer />
              </React.Fragment>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/FaqPage" element={<FaqPage />} />
          <Route path="/TandCPage" element={<TandCPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




