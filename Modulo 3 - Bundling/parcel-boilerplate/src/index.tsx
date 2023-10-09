import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./hello";
import { ByeComponent } from "./bye";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <HelloComponent />
        <ByeComponent />
    </>
);