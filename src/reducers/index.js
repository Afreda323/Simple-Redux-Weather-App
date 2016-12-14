import { combineReducers } from 'redux';
import WeatherReduce from './reduce_weather.js';

//combine reducers
const rootReducer = combineReducers({
  weather: WeatherReduce
});

export default rootReducer;
