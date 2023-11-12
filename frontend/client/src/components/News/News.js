import React, { useState } from "react";
import LatestNews from '../LatestNews/LatestNews';
import FinancialContent from '../FinancialContent/FinancialContent';
import BankingSuggestion from '../BankingSuggestions/BankingSuggestions';
import LoanAdvice from '../LoanAdvice/LoanAdvice';

function News() {
 
  return (
  <>
  <LatestNews/>
  <FinancialContent/>
  <BankingSuggestion/>
  <LoanAdvice/>
  </>

  );
}

export default News;
