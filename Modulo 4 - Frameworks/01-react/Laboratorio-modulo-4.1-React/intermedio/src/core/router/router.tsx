import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { CatsListScene, DogsListScene, CheckOutScene } from "@/scenes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatsListScene />} />
        <Route path={switchRoutes.cats} element={<CatsListScene />} />
        <Route path={switchRoutes.dogs} element={<DogsListScene />} />
        <Route path={switchRoutes.checkout} element={<CheckOutScene />} />
      </Routes>
    </Router>
  );
};
