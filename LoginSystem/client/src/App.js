import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userDetails'
import Navbar from './Navbar/navbar'

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const isToken = window.localStorage.getItem("token");
  const logOut=()=>{
    window.localStorage.clear();
    alert("Logged Out Successfully!");
    window.location.href="./sign-in";
  }
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={isLoggedIn=="true"?<UserDetails/>:<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
