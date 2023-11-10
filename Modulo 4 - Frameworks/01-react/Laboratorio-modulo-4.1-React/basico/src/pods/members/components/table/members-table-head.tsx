import React from "react";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export const TableHeadMembersList: React.FC = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="left"><strong>Avatar</strong></TableCell>
                <TableCell align="center"><strong>ID</strong></TableCell>
                <TableCell align="center"><strong>Name</strong></TableCell>
            </TableRow>
        </TableHead>
    );
};