import React from "react";
import { Routes, Route } from "react-router-dom";
import Login1 from "./Login1";
import Browser from "./Browser";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login1 />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
    </div>
  );
};

export default Body;
