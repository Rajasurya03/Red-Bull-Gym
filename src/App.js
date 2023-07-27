import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import BMI from "./pages/BMI";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import UserDetails from "./components/userDetails";

const App = () => (
  <Box>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bmi" element={<BMI />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/userDetails" element={<UserDetails />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
