import React from "react";

const Pagination = ({
  picPerPage,
  totalPictures,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPictures / picPerPage); i++) {
    pageNumbers.push(i);
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <nav>
      <ul className="pagination">
        {currentPage === 2 || currentPage > 2 ? (
          <button className="next" onClick={prevPage}>
            Prev
          </button>
        ) : null}
        {currentPage !== totalPictures / picPerPage ? (
          <button className="previous" onClick={nextPage}>
            Next
          </button>
        ) : null}
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a
                href="!#"
                className={currentPage === number ? "active" : ""}
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
