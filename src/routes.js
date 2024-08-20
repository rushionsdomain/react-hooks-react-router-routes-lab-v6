// src/routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/actors" element={<Actors />} />
    <Route path="/directors" element={<Directors />} />
    <Route path="/movie/:id" element={<Movie />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default RoutesConfig;
