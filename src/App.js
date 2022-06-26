import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adm from "./pages/Adm";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route element={<Home></Home>} path="/" exact />
      <Route element={<Adm></Adm>} path="/administracao" />
      <Route element={<Home></Home>} path="/administraçao/contabeis" />
      <Route element={<Home></Home>} path="/educaçao" />
      <Route element={<Home></Home>} path="/gestao" />
      <Route element={<Home></Home>} path="/informatica" />
      <Route element={<Home></Home>} path="/saude" />

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
