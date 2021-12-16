
import DataTable from "react-data-table-component";
import "./table.scss";

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
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
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
