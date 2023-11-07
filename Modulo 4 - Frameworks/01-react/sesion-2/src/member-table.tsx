import React from "react";
import { MemberHeader } from "./member-header";
import { MemberRow } from "./member-row";
import { MemberEntity } from "./model";

export const MemberTable = () => {
  const [list, setList] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((result) => setList(result));
  }, []);

  return list ? (
    <div className="user-list-container">
      <MemberHeader />
      {list?.map((item) => MemberRow({ item, randomNumber: Math.random() }))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};