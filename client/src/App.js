import React from "react";
import Main from './Component/Main/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Signup from "./Component/Authentication/Signup";
import ScrollToTop from "./Component/ScrollTop";
import Attendance from "./Component/Attendance/Attendance";
import Show from "./Component/Attendance/Show";


function App() {
  return (

    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/attendance" element={<Attendance />} />
          <Route exact path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
