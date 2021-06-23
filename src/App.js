import React, { useState } from 'react';
import CityForm from './components/CityForm';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [placeholder, setPlaceholder] = useState('Enter your city...');
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);

  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP}`;
  const oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP}&units=imperial`

  const getCoord = city => (
    fetch(currentWeatherURL.replace('{city}', city))
      .then(result => result.json())
      .then(res => {
        setPlaceholder('Enter your city...');
        return [res.coord.lat, res.coord.lon]
      })
      .catch(e => {
        setPlaceholder('Enter a VALID city...')
        return null;
      })
  );

  const getForecast = city => (
    getCoord(city)
      .then(coords => {
        if (coords != null) {
          fetch(oneCallURL.replace('lat={lat}&lon={lon}', `lat=${coords[0]}&lon=${coords[1]}`))
            .then(result => result.json())
            .then(res => {
              setForecast(res);
              setCity(city);
            })
        }
      })
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Weather Forecast</h1>
        <CityForm 
          placeholder={placeholder}
          onSubmit={getForecast} />
        {forecast ? 
          <WeatherCard
            city={city}
            data={forecast}
          /> 
          : null
        }
      </header>
    </div>
  );
}

export default App;