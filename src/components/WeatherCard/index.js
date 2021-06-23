import React from 'react';
import './index.css';

const WeatherCard = ({city, data}) => {
  const round = num => Math.round(num);

  const fToC = deg => round((deg - 32) * (5/9))

  const getDate = seconds => {
    var d = new Date(0);
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    d.setUTCSeconds(seconds);
    var hours = ('0' + d.getHours()).toLocaleLowerCase(-2);
    var minutes = ('0' + d.getMinutes()).toLocaleLowerCase(-2);

    return `${weekday[d.getDay()]} ${hours}:${minutes}`
  };

  const getMonthYear = seconds => {
    var d = new Date(0);
    d.setUTCSeconds(seconds);

    return `${d.getMonth()}/${d.getDay()}`
  }

  return (
    <div className="container">
      <div className="item-a">
        {round(data.current.temp)}&deg;F | {fToC(data.current.temp)}&deg;C
      </div>
      <div className="item-b">
        {`${city}`}
      </div>
      <div className="item-c">
        <p>Wind: {data.current.wind_speed} mph</p>
        <p>Humidity: {data.current.humidity}%</p>
      </div>
      <div className="item-d">
        <p>{getDate(data.current.dt).toString()}</p>
        <p>{data.current.weather[0].description}</p>
      </div>
      <div className="item-e">
        <table className="forecast-table">
          <thead>
            <tr>
              <th></th>
              {data.daily.slice(0,5).map((item, i) => (
                <th key={i}>{getMonthYear(item.dt)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left-header">Min</td>
              {data.daily.slice(0,5).map((item, i) => (
                <th key={i} className="data">{round(item.temp.min)}&deg;F</th>
              ))}
            </tr>
            <tr>
              <td className="left-header">Max</td>
              {data.daily.slice(0,5).map((item, i) => (
                <th key={i} className="data">{round(item.temp.max)}&deg;F</th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WeatherCard;
