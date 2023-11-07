import React from "react";

export const Demo = () => {
  return (
    <>
      <Header />
      <main>My app</main>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <>
      <h1>HEADER COMPONENT</h1>
    </>
  );
};
