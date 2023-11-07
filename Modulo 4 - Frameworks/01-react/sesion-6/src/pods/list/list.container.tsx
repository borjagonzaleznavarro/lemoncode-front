import React from "react";
import { MemberEntity } from "./list.vm";
import { List } from "./list.component";
import { getMembers } from "./api/api";
import { mapMembersToVM } from "./list.mappers";

interface Props {
  onMemberSelect: (id: string) => void;
}

export const ListContainer: React.FC<Props> = (props) => {
  const { onMemberSelect } = props;
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    getMembers().then(mapMembersToVM).then(setMembers);
  }, []);

  return (
    <>
      <List members={members} onMemberSelect={onMemberSelect} />
    </>
  );
};
