import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DetailPage } from "./detail";
import { ListPage } from "./list";
import { LoginPage } from "./login";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
