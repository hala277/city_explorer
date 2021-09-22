import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Movies extends Component {
    render() {
        return (
            <div>
               
               <Card  style = {{"textAlign" :"center" ,"fontWeight": "bold"}}>
              
               <Card.Body>
               <p>"title":{this.props.movies1.title}"</p>
               <p> "overview": "{this.props.movies1.overview}"</p>
               <p>"average_votes": "{this.props.movies1.vote_average}"</p>
               <p>"total_votes": "{this.props.movies1.vote_count}"</p>
               <p> "image_url": "{this.props.movies1.poster_path}"</p>
               <p>"popularity": "{this.props.movies1.popularity}"</p>
               <p>"released_on": "{this.props.movies1.release_date}"</p>
               </Card.Body>
              
              </Card>
             
            </div>
        )
    }
}

export default Movies