import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
class weather extends Component {
    render() {
        return (
            <div>
               <Card  style = {{"textAlign" :"center" ,"fontWeight": "bold"}}>
               <Card.Body>
               <p>description : low of {this.props.weather1.low_temp} , high of {this.props.weather1.max_temp} with {this.props.weather1.description} </p>
               <p> Date : {this.props.weather1.date}</p>
               </Card.Body>
              </Card>
               {/* this.low_temp = data.low_temp;
        this.max_temp = data.max_temp; */}
            </div>
        )
    }
}

export default weather
