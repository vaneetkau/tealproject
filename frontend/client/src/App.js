import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Statement from './pages/Statement/Statement';
import Overview from './pages/Overview/Overview';


 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Statement />} />
        <Route path="/Overview" element={<Overview />} />
      </Routes>
    </Router>
  );

}

export default App;
