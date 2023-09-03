// WeatherForm.js
import React, { useState } from 'react';

function WeatherForm({ getWeatherDataAndRender }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherDataAndRender(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        placeholder="Enter city or pincode"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherForm;
