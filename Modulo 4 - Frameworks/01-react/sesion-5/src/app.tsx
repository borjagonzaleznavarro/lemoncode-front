import React from "react";
import { AppRouter } from "./router";

export const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>React Router</h1>
      </header>
      <main>
        <AppRouter />
      </main>
    </>
  );
};
