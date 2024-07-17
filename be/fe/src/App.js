import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurProducts from "./Components/OurProducts";
import Admin from "./Components/Admin";
import Login from "./Components/login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<OurProducts />} /> */}
          {/* <Route path="/adminnitin0513" element={<Admin />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
