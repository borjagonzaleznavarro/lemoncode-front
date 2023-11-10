import React from "react";
import { MemberEntity } from "./members.vm";
import { mapMembersToVM } from "./members.mapper";
import { getMembersAPI, getLastPageAPI } from "./api";
import { Header } from "./components/header";
import {
  TableRowMembersList,
  TableHeadMembersList,
  PaginationMembersList,
} from "./components/table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import classes from "./styles.scss";

export const MemberTable = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName, setOrganizationName] =
    React.useState<string>("lemoncode");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [lastPage, setLastPage] = React.useState<number>(1);

  const getMembersPage = (page: number) => {
    getMembersAPI(organizationName)(page).then((membersList) => {
      if (!membersList) return alert("No members found");
      const MemberListVM = mapMembersToVM(membersList);
      setMembers(MemberListVM);
    });
  };

  const onLoadMembers = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    getMembersPage(1);
    getLastPageAPI(organizationName).then((lastPage) => setLastPage(lastPage));
  };

  React.useEffect(() => {
    if (organizationName != "") {
      getMembersPage(currentPage);
    }
  }, [currentPage]);

  return (
    <main>
      <h2 className={classes.mainTitle}>Organization members API Github</h2>

      <Header
        organizationName={organizationName}
        onChangeOrganizationName={setOrganizationName}
        loadMembers={onLoadMembers}
      />

      <PaginationMembersList
        currentPage={currentPage}
        onChangeCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />

      <TableContainer component={Paper} sx={{ marginBottom: "1rem" }}>
        <Table aria-label="simple table">
          <TableHeadMembersList />
          <TableBody>
            {members.map((member) => (
              <TableRowMembersList key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};
