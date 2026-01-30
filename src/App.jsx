

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CheckEligibility from './pages/CheckEligibility';
import Results from './pages/Results';

//
import Navbar from './components/Navbar';
import './App.css';


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Navbar />
        
        <main className="main-content">
           <Routes>
           

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
           
            <Route

              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            /> 

            <Route
              path="/check-eligibility" 
              element={
                <PrivateRoute>
                  <CheckEligibility />
                </PrivateRoute>
              } 
            />
           
             <Route 
               path="/results" 
               element={
                <PrivateRoute>
                  <Results />
                </PrivateRoute>
              } 
            />
            
           
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;