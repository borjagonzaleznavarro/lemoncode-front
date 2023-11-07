import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/core";
import { MemberEntity } from "./list.vm";
import { ListHeader } from "./components";

interface Props {
  members: MemberEntity[];
  onMemberSelect: (id: string) => void;
}

export const List: React.FC<Props> = (props) => {
  const { members, onMemberSelect } = props;

  return (
    <div className="list-user-list-container">
      <ListHeader />
      {members.map((member) => (
        <React.Fragment key={member.id}>
          <img src={member.avatarUrl} />
          <span>{member.id}</span>
          {/* <Link to={routes.detail(member.login)}>{member.login}</Link> */}
          <div className="list-link" onClick={() => onMemberSelect(member.login)}>{member.login}</div>
        </React.Fragment>
      ))}
    </div>
  );
};
