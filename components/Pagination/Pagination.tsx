"use client";

import ReactPaginate from "react-paginate";

import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: ({ selected }: { selected: number }) => void;
}

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={onPageChange}
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="Previous"
      nextLabel="Next"
    />
  );
};

export default Pagination;