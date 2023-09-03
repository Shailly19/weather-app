// api.js

export function formatUrl(data, searchValue) {
    const url = `https://api.weatherapi.com/v1/${data}.json?key=9195a0f9fe6a4d968e4145816230109&q=${searchValue}&aqi=yes`;
    return url;
  }
  
  export async function getWeatherData(url) {
    try {
      const response = await fetch(url, { mode: 'cors' });
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  