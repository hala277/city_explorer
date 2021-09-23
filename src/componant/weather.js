import React, { Component } from 'react';
import WeatherCH from './weatherCh'
class weather extends Component {
    render() {
        return (
            <div>
                 <WeatherCH
                 low_temp ={this.props.weather1.low_temp}
                 max_temp = {this.props.weather1.max_temp}
                 description ={this.props.weather1.description}
                 date = {this.props.weather1.date}
                 />
               
            </div>
        )
    }
}

export default weather
