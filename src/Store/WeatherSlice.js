import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
  "weather/getData",
  async (city, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=50f55584930380166e5e659958e998dd`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: { getWeatherData: null, error: false, loading: false },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.getWeatherData = action.payload
      console.log(state.getWeatherData)
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default weatherSlice.reducer;
