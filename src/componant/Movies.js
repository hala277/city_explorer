import React, { Component } from 'react';

import Movie from './movie'

class Movies extends Component {
    render() {
        console.log(this.props)
        return (
            <div>

                <Movie title={this.props.movies1.title}

                    overview={this.props.movies1.overview}
                    vote_average={this.props.movies1.vote_average}
                    vote_count ={this.props.movies1.vote_count}
                    poster_path={this.props.movies1.poster_path}
                    popularity={this.props.movies1.popularity}
                    release_date={this.props.movies1.release_date}
                />
               

            </div>
        )
    }
}

export default Movies