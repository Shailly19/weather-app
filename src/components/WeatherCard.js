// WeatherCard.js
import React from 'react';
import humidity from '../icons/humidity.png'
import aqi from '../icons/aqi.png'
import feelsLike from '../icons/feels-like.png'


function WeatherCard({ weatherData }) {
  const aqiStatusText = (i) => {
    switch (i) {
      case 1:
        return 'Good';
      case 2:
        return 'Moderate';
      case 3:
        return 'Unhealthy for sensitive group';
      case 4:
        return 'Unhealthy';
      case 5:
        return 'Very unhealthy';
      case 6:
        return 'Hazardous';
      default:
        return 'AQI Unavailable';
    }
  };

  return (
    <div id="card">

        <div id="main">
            <div id="main-header">
                <p>
                    <span id="city">{weatherData.location.name}</span>,
                    <span id="country">{weatherData.location.country}</span>
                </p>
            </div>

            <div id="main-content">
                <div id="temp">
                    <p>
                        <span id="temp-value">{weatherData.current.temp_c}</span>
                        <span id="temp-unit">℃</span>
                    </p>
                </div>
                <div id="weather">
                    <img src={weatherData.current.condition.icon} alt="icon" id="weather-icon" />
                </div>
            </div>
        </div>

        <div id="extra">
          <div className="humidity ext">
            <h2 className="extra-header">Humidity</h2>
            <div className="extra-content">
              <img src={humidity} alt="icon" id="humidity-icon" />
              <p>
                <span id="humidity-value">{weatherData.current.humidity}</span>
              </p>
            </div>
          </div>

          <div className="aqi ext">
            <h2 className="extra-header">AQI</h2>
            <div className="extra-content">
              <img src={aqi} alt="icon" id="aqi-icon" />
              <p>
                <span id="aqi-status">{aqiStatusText(weatherData.current.air_quality['us-epa-index'])}</span>
              </p>
            </div>
          </div>

          <div className="feels-like ext">
            <h2 className="extra-header">Feels Like</h2>
            <div className="extra-content">
              <img src={feelsLike} alt="icon" id="feels-like-icon" />
              <p>
                <span id="feels-like-value">{weatherData.current.feelslike_c}</span>
                <span id="feels-like-unit">℃</span>
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default WeatherCard;
