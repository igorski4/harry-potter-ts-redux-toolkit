import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LikesPage } from "../pages/LikesPage";
import { MainPage } from "../pages/MainPage";

import "./global/styles/global.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/likes" element={<LikesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
