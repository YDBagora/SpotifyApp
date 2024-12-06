import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';

const RouterFile = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/Signup' element={<SignUpPage />}/>
          <Route path='/home' element={<HomePage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default RouterFile;