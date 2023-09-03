// App.js
import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm'; 
import WeatherCard from './components/WeatherCard'; 
import * as api from './components/api'; 
import "./styles.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherDataAndRender('Mumbai');
  }, []);

  const getWeatherDataAndRender = async (searchValue) => {
    const url = api.formatUrl('current', searchValue);
    try {
      const data = await api.getWeatherData(url);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <WeatherForm getWeatherDataAndRender={getWeatherDataAndRender} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
