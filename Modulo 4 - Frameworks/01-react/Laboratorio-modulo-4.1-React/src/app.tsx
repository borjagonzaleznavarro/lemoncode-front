import React from "react";
import { AppRouter, CartContextProvider } from "@/core";

export const App: React.FC = () => {
  return (
    <CartContextProvider>
      <AppRouter />
    </CartContextProvider>
  )
};
