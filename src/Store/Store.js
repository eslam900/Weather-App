import { configureStore } from "@reduxjs/toolkit";
import weather from "./WeatherSlice";

export default configureStore({
  reducer: {
    weather,
  },
});
