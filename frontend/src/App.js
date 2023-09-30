import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";                      //firebase authentication
import { app } from './firebase'                              //firebase
import './App.css';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

const auth = getAuth(app);                                    //firebase authentication


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  const signupPgae = () => {
    createUserWithEmailAndPassword(
      auth, 
      "noyal@xyz.com",
      "6789@noyal"
    ).then((value) => console.log(value));
  }

  return (
    <div className="App">
      { currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
     
  </div>
  );
}

export default App;
