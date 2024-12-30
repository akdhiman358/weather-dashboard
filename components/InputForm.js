import { useState } from 'react';

const InputForm = ({ fetchWeatherData }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!latitude || !longitude || !startDate || !endDate) {
      alert('Please fill in all fields.');
      return;
    }
    fetchWeatherData({ latitude, longitude, startDate, endDate });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-red-500">Latitude</label>
        <input
          type="number"
          step="any"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-red-500">Longitude</label>
        <input
          type="number"
          step="any"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-red-500">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-red-500">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Fetch Weather
      </button>
    </form>
  );
};

export default InputForm;
