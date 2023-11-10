import React from "react";
import Button from "@mui/material/Button";
import NextIcon from "@mui/icons-material/ArrowForwardIos";
import PrevIcon from "@mui/icons-material/ArrowBackIos";
import classes from "./members-table.styles.scss";

interface Props {
  currentPage: number;
  onChangeCurrentPage: (page: number) => void;
  lastPage: number;
}

export const PaginationMembersList: React.FC<Props> = (props) => {
  const { currentPage, onChangeCurrentPage, lastPage } = props;

  const hasNextPage = () => currentPage < lastPage;
  const hasPreviousPage = () => currentPage > 1;

  const toNextPage = () => {
    const nextPage = currentPage + 1;
    onChangeCurrentPage(nextPage);
  };

  const toPreviousPage = () => {
    const previousPage = currentPage - 1;
    onChangeCurrentPage(previousPage);
  };

  return (
    <div className={classes.paginationContent}>
      <Button
        variant="contained"
        color="primary"
        onClick={toPreviousPage}
        startIcon={<PrevIcon />}
        disabled={!hasPreviousPage()}
      >
        Prev
      </Button>

      <div className={classes.pagination}>
        <span>Page {currentPage} of {lastPage}</span>
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={toNextPage}
        endIcon={<NextIcon />}
        disabled={!hasNextPage()}
      >
        Next
      </Button>
    </div>
  );
};
