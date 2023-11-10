import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classesHeader from "./members-header.styles.scss";

interface Props {
  organizationName: string;
  onChangeOrganizationName: (organizationName: string) => void;
  loadMembers: () => void;
}

export const Header: React.FC<Props> = (props) => {
  const { organizationName, onChangeOrganizationName, loadMembers } = props;
  return (
    <div className={classesHeader.organizationInput}>
      <form onSubmit={loadMembers}>
        <TextField
          label="Organization"
          id="outlined-size-small"
          defaultValue={organizationName}
          variant="outlined"
          color="primary"
          size="small"
          onChange={(e) => onChangeOrganizationName(e.target.value)}
        />

        <Button variant="contained" color="primary" onClick={loadMembers}>
          Load
        </Button>
      </form>
    </div>
  );
};
