import { useState } from 'react';

const WeatherTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handlePrevPage = () => page > 0 && setPage(page - 1);
  const handleNextPage = () =>
    page < Math.ceil(data.time.length / rowsPerPage) - 1 && setPage(page + 1);

  const currentPageData = data.time
    .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    .map((_, idx) => ({
      date: data.time[page * rowsPerPage + idx],
      maxTemp: data.temperature_2m_max[page * rowsPerPage + idx],
      minTemp: data.temperature_2m_min[page * rowsPerPage + idx],
      meanTemp: data.temperature_2m_mean[page * rowsPerPage + idx],
    }));

  return (
    <div className="bg-white p-4 rounded shadow-md mt-6">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Date</th>
            <th>Max Temp (°C)</th>
            <th>Min Temp (°C)</th>
            <th>Mean Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.maxTemp}</td>
              <td>{row.minTemp}</td>
              <td>{row.meanTemp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevPage}
          className="bg-gray-300 py-1 px-4 rounded disabled:opacity-50"
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-gray-300 py-1 px-4 rounded disabled:opacity-50"
          disabled={page >= Math.ceil(data.time.length / rowsPerPage) - 1}
        >
        
          Next
        </button>
      </div>
    </div>
  );
};

export default WeatherTable;
