"use client"; 

import { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/InputForm';
import WeatherGraph from '../components/WeatherGraph';
import WeatherTable from '../components/WeatherTable';
import ErrorMessage from '../components/ErrorMessage';

export default function Page() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async ({ latitude, longitude, startDate, endDate }) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude,
          longitude,
          start_date: startDate,
          end_date: endDate,
          daily: [
            'temperature_2m_max',
            'temperature_2m_min',
            'temperature_2m_mean',
            'apparent_temperature_max',
            'apparent_temperature_min',
            'apparent_temperature_mean',
          ].join(','),
          timezone: 'auto',
        },
      });
      setWeatherData(response.data.daily);
    } catch (err) {
      setError('Failed to fetch weather data. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      <InputForm fetchWeatherData={fetchWeatherData} />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weatherData && (
        <>
          <WeatherGraph data={weatherData} />
          <WeatherTable data={weatherData} />
        </>
      )}
    </div>
  );
}
