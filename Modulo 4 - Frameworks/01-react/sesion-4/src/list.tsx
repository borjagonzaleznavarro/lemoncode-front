import React from "react";
import { generatePath, Link } from "react-router-dom";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  React.useInsertionEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then(setMembers);
  }, []);

  return (
    <div className="list-user-list-container">
      <span className="list-header">Avatar</span>
      <span className="list-header">Id</span>
      <span className="list-header">Name</span>
      {members.map((member) => (
        <>
          <img src={member.avatar_url} />
          <span>{member.id}</span>
          <Link to={generatePath(`/detail/:id`, { id: member.login })}>
             {member.login}
           </Link>
        </>
      ))}
    </div>
  );
};
