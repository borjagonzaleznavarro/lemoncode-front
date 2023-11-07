import React from "react";
import { CenteredLayout } from "@/layouts";
import { LoginContainer } from "@/pods";

interface Props {
  onLogin: (userName: string ) => void;
}

export const LoginScene: React.FC<Props> = (props) => {
  const { onLogin } = props;
  
  return (
    <CenteredLayout>
      <LoginContainer onLogin={onLogin} />
    </CenteredLayout>
  );
};
