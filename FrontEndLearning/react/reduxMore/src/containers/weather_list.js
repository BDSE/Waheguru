import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Charts';
import GoogleMap from '../components/GoogleMaps';

class WeatherList extends Component{
    constructor(props){
        super(props);
    }
    renderWeatherTable(cityData){
        const cityName = cityData.city.name;
        const temperatureArray = cityData.list.map((weather) => weather.main.temp);
        const pressureArray = cityData.list.map((weather) => weather.main.pressure);
        const humidityArray = cityData.list.map((weather) => weather.main.humidity);
        const { lat , lon } = cityData.city.coord;
        return (
            <tr key={cityName}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>
                    <Chart data={temperatureArray} color="orange" />
                </td>
                <td>
                    <Chart data={humidityArray} color="blue" />
                </td>
                <td>
                    <Chart data={pressureArray} color="red" />
                </td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table tale-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weatherData.map(this.renderWeatherTable)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weatherData: state.weatherData
    }
}

export default connect(mapStateToProps)(WeatherList);
