import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Movie extends Component {
    render() {
        return (
            <div>
               

              
               <Card  style = {{"textAlign" :"center" ,"fontWeight": "bold"}}>
              
               <Card.Body>

               <p>"title":{this.props.title}"</p>
               <p> "overview": "{this.props.overview}"</p>
               <p>"average_votes": "{this.props.vote_average}"</p>
               <p>"total_votes": "{this.props.vote_count}"</p>
               <img src ={this.props.poster_path} alt ="img" ></img>
               <p>"popularity": "{this.props.popularity}"</p>
               <p>"released_on": "{this.props.release_date}"</p>
               </Card.Body>
              
              </Card>
             
            </div>
        )
    }
}

export default Movie