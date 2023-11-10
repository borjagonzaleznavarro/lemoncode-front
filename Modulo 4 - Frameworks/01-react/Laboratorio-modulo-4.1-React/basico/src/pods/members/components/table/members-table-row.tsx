import React from "react";
import { MemberEntity } from "@/members.vm";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface Props {
  member: MemberEntity;
}

export const TableRowMembersList: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <TableRow>
      <TableCell align="left" sx={{ width: 80 }}>
        <img src={member.avatar_url} style={{ width: "80px", display: "block", borderRadius: "3px" }} />
      </TableCell>
      <TableCell align="center">{member.id}</TableCell>
      <TableCell align="center">{member.login}</TableCell>
    </TableRow>
  );
};
