import React from "react";
import { createRoot } from "react-dom/client";
import { AverageComponent } from "./components/average-component/averageComponent";
import { TotalScoreComponent } from "./totalScoreComponent";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./content/logo_1.png";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>Hello from React DOM</h1>
        <img src={logo} alt="Logo" />
        <AverageComponent />
        <TotalScoreComponent />
    </div>
);