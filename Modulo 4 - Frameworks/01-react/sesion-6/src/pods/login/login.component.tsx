import React from "react";
import { createEmptyFormData, FormData } from "./login.vm";

interface Props {
  onSubmit: (user: string, password: string) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  const [formData, setFormData] = React.useState<FormData>(
    createEmptyFormData()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(formData.username, formData.password);
  };

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange("username")}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange("password")}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
