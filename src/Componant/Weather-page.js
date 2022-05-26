import React, { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Store/WeatherSlice";
import Card from "./Card";
import Styles from "./Weather.module.css";

const WeatherPage = () => {
  const dispatch = useDispatch();
  const { getWeatherData, loading, error } = useSelector(
    (state) => state.weather
  );

  const city = useRef(null);

  const handelSubmit = (e) => {
    if (city.current.value !== "") {
      e.preventDefault();
      dispatch(getData(city.current.value));
      city.current.value = null;
    } else {
      e.preventDefault();
    }
  };
  return (
    <Fragment>
      {error && window.alert(error)}
      <div className={Styles.main}>
        <div className={Styles.container}>
          <form onSubmit={handelSubmit}>
            <input
              ref={city}
              type="text"
              className={Styles.search}
              placeholder={
                getWeatherData !== null && getWeatherData.cod === 200
                  ? `${getWeatherData.name},${getWeatherData.sys.country}`
                  : "Enter your location"
              }
            />
            <button type="submit" className={Styles.btn}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          {getWeatherData === null ? (
            <h3>please Enter your location</h3>
          ) : loading === true ? (
            <h3>loading...</h3>
          ) : getWeatherData.cod === 200 ? (
            <Fragment>
              <h1
                className={Styles.city}
              >{`${getWeatherData.name},${getWeatherData.sys.country}`}</h1>
              <div>
                <div className={Styles.temp}>
                  {Math.round(getWeatherData.main.temp)}&deg;C
                </div>
                <div className={Styles.status}>
                  <img
                    src={`http://openweathermap.org/img/wn/${getWeatherData.weather[0].icon}@2x.png`}
                    alt="weather icon"
                  />
                  <span>{getWeatherData.weather[0].description}</span>
                </div>
              </div>
              <div className={Styles.weatherData}>
                <Card />
              </div>
            </Fragment>
          ) : (
            <h3>{getWeatherData.message}</h3>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default WeatherPage;
