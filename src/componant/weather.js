import React, { Component } from 'react';

class weather extends Component {
    render() {
        return (
            <div>
               <p>{this.props.weather1.date}</p>
               <p>{this.props.weather1.description}</p>
            </div>
        )
    }
}

export default weather
