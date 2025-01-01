import { useState } from "react";

const InputForm = ({ fetchWeatherData }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validation: Check if all fields are filled
    if (!latitude || !longitude || !startDate || !endDate) {
      setError("Please fill in all fields.");
      return;
    }

    // Validation: Ensure dates are in the past
    if (start > today || end > today) {
      setError("You can only select dates in the past.");
      return;
    }

    // Validation: Start date should not be after end date
    if (start > end) {
      setError("Start date cannot be after the end date.");
      return;
    }

    setError(""); // Clear previous errors
    fetchWeatherData({ latitude, longitude, startDate, endDate });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto"
    >
      {/* Validation error message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Input fields */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Latitude</label>
          <input
            type="number"
            step="any"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="e.g., 37.7749"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Longitude</label>
          <input
            type="number"
            step="any"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="w-full p-3 border rounded"
            placeholder="e.g., -122.4194"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-3 border rounded"
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded mt-6 hover:bg-blue-600"
      >
        Fetch Weather
      </button>
    </form>
  );
};

export default InputForm;
