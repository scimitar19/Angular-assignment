import DataTable from "react-data-table-component";
import "./table.scss";
import { Pagination } from "react-headless-pagination";
import RightArrow from "./../../assets/icons/PaginationArrowRight.svg"

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}


// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage
}) => {
  console.log("rowsPerPage",rowsPerPage);
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    console.log("e.target.value",e.target.value);
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length+1;
  const previosDisabled = currentPage === 1;

  const handlePageChange = (page) => {
    onChangePage(Number(page+1));
  };
  

  return (
    // <nav>
    //   <ul className="pagination">
    //     <li className="page-item">
    //       <button
    //         className="page-link"
    //         onClick={handleBackButtonClick}
    //         disabled={previosDisabled}
    //         aria-disabled={previosDisabled}
    //         aria-label="previous page"
    //       >
    //         Previous
    //       </button>
    //     </li>
    //     {pageItems.map((page) => {
    //       const className =
    //         page === currentPage ? "page-item active" : "page-item";

    //       return (
    //         <li key={page} className={className}>
    //           <button
    //             className="page-link"
    //             onClick={handlePageNumber}
    //             value={page}
    //           >
    //             {page}
    //           </button>
    //         </li>
    //       );
    //     })}
    //     <li className="page-item">
    //       <button
    //         className="page-link"
    //         onClick={handleNextButtonClick}
    //         disabled={nextDisabled}
    //         aria-disabled={nextDisabled}
    //         aria-label="next page"
    //       >
    //         Next
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
    <>
    <Pagination
      currentPage={currentPage-1}
      setCurrentPage={handlePageChange}
      totalPages={pages}
      edgePageCount={2}
      middlePagesSiblingCount={2}
      className="mainPagination"
      truncableText="..."
      truncableClassName=""
    >
      <Pagination.PrevButton className={ previosDisabled ?  `previousBtn disabledButton` : `previousBtn`} onClick = {handleBackButtonClick}><img src = {RightArrow} className ="rotated"/></Pagination.PrevButton>

      <div className="flex items-center justify-center flex-grow">
        <Pagination.PageButton
          activeClassName="activePage"
          inactiveClassName=""
          className="pageNumber"
          onClick={handlePageNumber}

        />
      </div>

      <Pagination.NextButton className={ nextDisabled ?  `nextBtn disabledButton` : `nextBtn`} onClick = {handleNextButtonClick}><img src = {RightArrow}/></Pagination.NextButton>
    </Pagination>
    </>
  );
};


const SortedIcon =  () => {
  return (
    <svg width="7" height="7" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M3.19855 0.209961L6.39709 5.75001H0L3.19855 0.209961Z" fill="#C4C4C4"/>
      <path d="M3.19855 12.54L6.39709 6.99999H0L3.19855 12.54Z" fill="#C4C4C4"/>
    </svg>

  )
}
const CustomTable  = ({conditionalRowStyles,columns, data}) => {
  return (
    <>
       <div className = "MainTable">
       <DataTable
          title=""
          columns={columns}
          data={data}
          pagination
          sortIcon= {<SortedIcon />}
          paginationComponent={BootyPagination}
          striped = {true}

        />
       </div>
     </>
  );
}

export default CustomTable
