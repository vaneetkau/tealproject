import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import Sidebar from './components/Sidebar/Sidebar';
import reportWebVitals from './reportWebVitals';
import GroupExample from './components/LatestNews/LatestNews';
import LoanAdvice from './components/LoanAdvice/LoanAdvice';
import GroupExampleF from './components/FinancialContent/FinancialContent';
import BankingSuggestions from './components/BankingSuggestions/BankingSuggestions';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <GroupExample />
    <GroupExampleF />
    <BankingSuggestions />
    <LoanAdvice /> */}
<Sidebar />


  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
