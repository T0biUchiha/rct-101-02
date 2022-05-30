import React from "react";
import {Button,ButtonGroup,Select} from "@chakra-ui/react"
import { useState, useEffect,axios } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={() => setPage(1)}>First</Button>
      <Button data-cy="pagination-previous-button" onClick={() => setPage(page - 1)}>Prev</Button>
      <Select data-cy="pagination-limit-select" onChange={(e) => {
              setLimit(Number(e.target.value));
            }}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={() => setPage(page + 1)}>Next</Button>
      <Button data-cy="pagination-last-button" onClick={() => setPage(page - 1)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
