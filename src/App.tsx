//import react from 'react'
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/Signup" Component={Signup} />
          {/* Other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;