import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Styles from "./Card.module.css";

const Card = () => {
  const { getWeatherData } = useSelector((state) => state.weather);

  // const getTime = (number) => {
  //   const hours = new Date(number).getHours();
  //   const minute = new Date(number).getMinutes();
  //   return `${hours}:${minute}`;
  // };
  const getTime = (number) => {
    const hours = new Date(number).getHours();
    const minute = new Date(number).getMinutes();
    return `${hours}:${minute}`;
  };

  return (
    <Fragment>
      <div className={Styles.card}>
        <div>
          <span>sunrise</span>
          <span>{getTime(getWeatherData.sys.sunrise)}</span>
        </div>
        <div>
          <span>sunset</span>
          <span>{getTime(getWeatherData.sys.sunset)}</span>
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
