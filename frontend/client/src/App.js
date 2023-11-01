// import LoanList from './components/LoanTest/LoanList';
// import Sidebar from './components/Sidebar/Sidebar';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      {/* <LoanList /> */}
//      <Sidebar />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <NewsList newsType="product-news" />
      <NewsList newsType="loan-news" />
      <NewsList newsType="financial-news" />
      <NewsList newsType="banking-news" />
      <NewsList newsType="langara-news" />
     

    </div>
  );
}

export default App;
