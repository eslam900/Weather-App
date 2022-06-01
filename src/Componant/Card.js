import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Styles from "./Card.module.css";

const Card = () => {
  const { getWeatherData } = useSelector((state) => state.weather);

  const getTime = (time, timeZone) => {
    const difTime =
      (new Date().getHours() - new Date().getUTCHours()) * 60 * 60;
    const hours = new Date((time + (timeZone - difTime)) * 1000).getHours();
    const minute = new Date(time * 1000).getMinutes();
    if (hours < 10) {
      return `0${hours}:${minute}`;
    } else if (minute < 10) {
      return `${hours}:0${minute}`;
    } else if (hours < 10 && minute < 10) {
      return `0${hours}:0${minute}`;
    }
    return `${hours}:${minute}`;
  };

  return (
    <Fragment>
      <div className={Styles.card}>
        <div>
          <span>sunrise</span>

          <span>
            {getTime(getWeatherData.sys.sunrise, getWeatherData.timezone)}
          </span>
        </div>
        <div>
          <span>sunset</span>
          <span>
            {getTime(getWeatherData.sys.sunset, getWeatherData.timezone)}
          </span>
        </div>
        <div>
          <span>realfeel</span>
          <span>{Math.round(getWeatherData.main.feels_like)}&deg;C</span>
        </div>
        <div>
          <span>humidity</span>
          <span>{getWeatherData.main.humidity}%</span>
        </div>
        <div>
          <span>temp_max</span>
          <span>{Math.round(getWeatherData.main.temp_max)}&deg;C</span>
        </div>
        <div>
          <span>temp_min</span>
          <span>{Math.round(getWeatherData.main.temp_min)}&deg;C</span>
        </div>
        <div>
          <span>wind speed</span>
          <span>{Math.round(getWeatherData.wind.speed * 3.6)}km/h</span>
        </div>
        <div>
          <span>pressure</span>
          <span>{getWeatherData.main.pressure}mb</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
