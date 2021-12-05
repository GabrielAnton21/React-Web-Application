import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"
import './App.css';
import AboutUs from './Views/AboutUs';
import Home from './Views/Home';

function App() {
  return (
    
      <Router>
        <div className="App">
      Culture's Peak
      </div>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
          <Link to="/about" className="text-blue-500">About Us</Link>
          </li>
          
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route path="/about" element={<AboutUs />}>
          
          </Route>
        </Routes>
      </Router>
    
  );
}

export default App;
