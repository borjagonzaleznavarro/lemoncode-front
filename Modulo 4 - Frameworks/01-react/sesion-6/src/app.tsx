import React from "react";
import { AppRouter, ProfileProvider } from "@/core";

export const App: React.FC = () => {
  return (
    <ProfileProvider>
      <AppRouter />
    </ProfileProvider>
  );
};
