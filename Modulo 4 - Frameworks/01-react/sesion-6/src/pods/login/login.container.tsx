import React from "react";
import { Login } from "./login.component";

interface Props {
  onLogin: (userName: string) => void;
}

export const LoginContainer: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const handleSubmit = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      onLogin(username);
    } else {
      alert("Invalid username or password");
    }
  };

  return <Login onSubmit={handleSubmit} />;
};
