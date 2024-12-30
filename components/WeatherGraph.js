"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherGraph = ({ data }) => {
  // Format data to match Recharts' input format
  const formattedData = data.time.map((date, index) => ({
    date,
    maxTemp: data.temperature_2m_max[index],
    minTemp: data.temperature_2m_min[index],
    meanTemp: data.temperature_2m_mean[index],
  }));

  return (
    <div className="w-full h-96">
      <h2 className="text-xl font-bold text-center mb-4">Temperature Trends</h2>
      <ResponsiveContainer>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="maxTemp" stroke="#ff7300" name="Max Temp" />
          <Line type="monotone" dataKey="minTemp" stroke="#387908" name="Min Temp" />
          <Line type="monotone" dataKey="meanTemp" stroke="#8884d8" name="Mean Temp" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherGraph;
