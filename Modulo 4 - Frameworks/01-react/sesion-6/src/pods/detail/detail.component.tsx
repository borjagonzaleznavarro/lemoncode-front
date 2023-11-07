import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import { Member } from "./detail.vm";

interface Props {
    member: Member;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <div>
      <h3>{member.login}</h3>
      <img src={member.avatar_url} width="150" alt={member.login} />
      <p>id: {member.id}</p>
      <p>name: {member.name}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <Link to={routes.list}>Back to list page</Link>
    </div>
  );
};
