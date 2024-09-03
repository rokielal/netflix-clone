import React from "react";
import "./index.css";
import Body from "./components/Body";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
};

export default App;
