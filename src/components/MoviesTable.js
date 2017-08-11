import React from 'react';
import MovieProfile from './MovieProfile';
import {connect} from 'react-redux';

class MoviesTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {author: ""}
  }

 movieProfiles(movie, index){
   return <MovieProfile
             title = {movie.show_title}
             director = {movie.director}
             year = {movie.release_year}
             category = {movie.category}
             rating = {movie.rating}
             poster = {movie.poster}
             summary = {movie.summary}
          />;
 }
  render(){
    return(
       <div>
          {this.props.movies.map(this.movieProfiles)}
       </div>
    );
  }
}

export default MoviesTable
