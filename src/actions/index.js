import axios from 'axios';
//api key
const key = '8543cf22791cbfe54eaa20de24e2e20b';
const root = 'http://api.openweathermap.org/data/2.5/forecast'

//Keep fetchWeather var the same everywhere
export const FETCH_WEATHER = 'FETCH_WEATHER';

//export the call function
export function fetchWeather(city) {
  const url = `${root}?appid=${key}&q=${city},us`;
  //set the response of the call to a var
  const request = axios.get(url);
  //send the response to the reducers
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
