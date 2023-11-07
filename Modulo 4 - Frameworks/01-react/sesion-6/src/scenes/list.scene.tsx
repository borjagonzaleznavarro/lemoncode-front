import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { DetailContainer, ListContainer } from "@/pods";
import { routes } from "@/core";

export const ListScene: React.FC = () => {
  const [id, setId] = React.useState<string>();
  const navigate = useNavigate();

  const handleMemberSelect = (id: string) => {
    setId(id);
  }
  
  return (
    <AppLayout>
      <ListContainer onMemberSelect={handleMemberSelect}/>
      {id && <DetailContainer id={id} />}
    </AppLayout>
  );
};
