import { useState } from 'react';

const WeatherTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  // Pagination handlers
  const handlePrevPage = () => page > 0 && setPage(page - 1);
  const handleNextPage = () =>
    page < Math.ceil(data.time.length / rowsPerPage) - 1 && setPage(page + 1);

  // Extract current page data
  const currentPageData = data.time
    .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    .map((_, idx) => ({
      date: data.time[page * rowsPerPage + idx] || 'Not Available',
      maxTemp: data.temperature_2m_max[page * rowsPerPage + idx] || '-',
      minTemp: data.temperature_2m_min[page * rowsPerPage + idx] || '-',
      meanTemp: data.temperature_2m_mean[page * rowsPerPage + idx] || '-',
    }));

  return (
    <div className="bg-white p-4 rounded shadow-md mt-6">
      {/* Header message */}
      <p className="text-center text-gray-600 font-medium mb-4">
        Data is only available for the last 3 months. To access older data, consider upgrading to the paid version of the API.
      </p>
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
      {/* Pagination controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handlePrevPage}
          className={`py-1 px-4 rounded bg-gray-300 ${
            page === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'
          }`}
          disabled={page === 0}
        >
          Previous
        </button>
        <p className="text-gray-600">
          Page {page + 1} of {Math.ceil(data.time.length / rowsPerPage)}
        </p>
        <button
          onClick={handleNextPage}
          className={`py-1 px-4 rounded bg-gray-300 ${
            page >= Math.ceil(data.time.length / rowsPerPage) - 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-400'
          }`}
          disabled={page >= Math.ceil(data.time.length / rowsPerPage) - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WeatherTable;
