import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element={<Home></Home>} path="/" exact />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
