import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/core";
import { AppLayout } from "@/layouts";
import { Detail } from "./detail.component";
import { createDefaultMemberDetail, Member } from "./detail.vm";

interface Props {
  id: string;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [member, setMember] = React.useState<Member>(
    createDefaultMemberDetail()
  );

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, [id]);

  return <Detail member={member} />;
};
