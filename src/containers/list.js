import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import _ from 'lodash';
import Map from '../components/map.js';

class WeatherList extends React.Component {
  renderWeather(cityData){
    //DRY name
    const name = cityData.city.name;
    //map over weather data and return it to temps, pressure, and humidity
    let temps = _.map(cityData.list.map(weather => weather.main.temp ), (temp => temp * (9 / 5) - 459.67));
    const pressures = cityData.list.map( weather => weather.main.pressure);
    const humidities = cityData.list.map( weather =>weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <div key={name}>
        <div className="row card">
          <div className="col-md-12 col-lg-3"><h5>City: {name}</h5><Map lon={lon} lat={lat} /></div>
          <div className="col-xs-4 col-lg-3"><h5>Avg Temp (F)</h5><Chart data={temps} color="blue" units="&deg;F"/></div>
          <div className="col-xs-4 col-lg-3"><h5>Pressure (hPa)</h5><Chart data={pressures} color="green" units=" hPa"/></div>
          <div className="col-xs-4 col-lg-3"><h5>Humidity (%)</h5><Chart data={humidities} color="black" units="%"/></div>
        </div>
      </div>
    )
  }
  render(){
    return(
      <div>
          {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}
function mapStateToProps(state) {
    return { weather: state.weather}
}
export default connect(mapStateToProps)(WeatherList);
