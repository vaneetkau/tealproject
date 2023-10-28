import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";                      //firebase authentication
import { app } from './firebase'                                                              //firebase
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";                    //React-Router-DOM
import './App.css';
import { Login } from './Components/UserAuthentication/Login';
import { Register } from './Components/UserAuthentication/Register';
import { MyProfile } from './Components/MyProfile';


const auth = getAuth(app);                                                                    //firebase authentication


function App() {
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
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
