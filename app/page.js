"use client";

import { useState } from "react";
import InputForm from "../components/InputForm";
import WeatherChart from "../components/WeatherChart";
import WeatherTable from "../components/WeatherTable";
import { fetchWeatherData } from "../lib/fetchWeatherData";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(params);
      setWeatherData(data);
    } catch (err) {
      console.log(error);
      setError("Failed to fetch weather data.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Weather Dashboard</h1>
      <InputForm onSubmit={handleFetchData} />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      {weatherData && (
        <>
          <WeatherChart data={weatherData} />
          <WeatherTable data={weatherData} />
        </>
      )}
    </div>
  );
}
