import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style jsx="true">
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        className="pagination justify-content-center gap-3 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextclassName="btn btn-primary pagination-text-override next"
        previousclassName="btn btn-primary pagination-text-override prev"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageclassName="page-item"
        pageLinkclassName="page-link"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        activeclassName="active"
        pageCount={info?.pages}
        marginPagesDisplayed={width < 576 ? 1 : 4 }
        pageRangeDisplayed={width < 576 ? 1 : 2}
      />
    </>
  );
};

export default Pagination;
