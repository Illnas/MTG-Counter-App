import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  
  // Pagination Logic
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="m-4 p-2 bg-slate-400 lg:w-5/6 2xl:w-2/3">
      <ul className="flex justify-center items-center">
        <li className="bg-slate-100 m-1 p-3 rounded-l-full w-24 cursor-pointer hover:bg-slate-700 hover:text-white">
          <button onClick={prevPage} className="w-full h-full">
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${
              pgNumber === currentPage
                ? "bg-orange-300 lg:h-10 2xl:h-10 lg:w-16 2xl:w-9 lg:m-1 2xl:m-2 border-slate-600 border-2"
                : "bg-orange-100 lg:h-10 2xl:h-10 lg:w-16 2xl:w-9 lg:m-1 2xl:m-2"
            }`}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className="w-full h-full hover:bg-orange-900 hover:text-white"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="bg-slate-100 m-1 p-3 rounded-r-full w-24 cursor-pointer hover:bg-slate-700 hover:text-white">
          <button className="" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
