import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
class weatherCh extends Component {
    render() {
        return (
            <div>
               <Card  style = {{"textAlign" :"center" ,"fontWeight": "bold"}}>
               <Card.Body>
               <p>description : low of {this.props.low_temp} , high of {this.props.max_temp} with {this.props.description} </p>
               <p> Date : {this.props.date}</p>
               </Card.Body>
              </Card>
              
            </div>
        )
    }
}

export default weatherCh
