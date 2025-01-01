import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const WeatherTable = ({ data }) => {
  const [page, setPage] = useState(0); // Current page
  const rowsPerPage = 10; // Number of rows per page

  // Handle page click (react-paginate)
  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected); // Update page based on clicked page number
  };

  // Extract current page data
  const currentPageData = data.time
    .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    .map((_, idx) => ({
      date: data.time[page * rowsPerPage + idx] || 'Not Available',
      maxTemp: data.temperature_2m_max[page * rowsPerPage + idx] || '-',
      minTemp: data.temperature_2m_min[page * rowsPerPage + idx] || '-',
      meanTemp: data.temperature_2m_mean[page * rowsPerPage + idx] || '-',
    }));

  // Total number of pages
  const pageCount = Math.ceil(data.time.length / rowsPerPage);

  return (
    <div className="bg-white p-4 rounded shadow-md mt-6">
      {/* Header message */}
      <p className="text-center text-gray-600 font-medium mb-4">
        Data is only available for the last 3 months. To access older data, consider upgrading to the paid version of the API.
      </p>

      {/* Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Max Temp (°C)</th>
            <th className="border border-gray-300 px-4 py-2">Min Temp (°C)</th>
            <th className="border border-gray-300 px-4 py-2">Mean Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="border border-gray-300 px-4 py-2">{row.date}</td>
              <td className="border border-gray-300 px-4 py-2">{row.maxTemp}</td>
              <td className="border border-gray-300 px-4 py-2">{row.minTemp}</td>
              <td className="border border-gray-300 px-4 py-2">{row.meanTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5} // Number of page buttons visible
          marginPagesDisplayed={2} // Pages visible at the start/end
          pageCount={pageCount} // Total number of pages
          previousLabel="< Previous"
          containerClassName="pagination flex items-center justify-center flex-wrap space-x-2 space-y-2" // Wrap items on smaller screens
          pageClassName="page-item" // Styling page numbers
          pageLinkClassName="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm" // Adjust text size for smaller screens
          previousLinkClassName="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm" // Adjust text size for "Previous"
          nextLinkClassName="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-sm" // Adjust text size for "Next"
          activeLinkClassName="bg-blue-500 text-white" // Styling active page
          disabledClassName="opacity-50 cursor-not-allowed" // Styling disabled buttons
        />
</div>

    </div>
  );
};

export default WeatherTable;
