import React from 'react';
import MovieRow from './MovieRow';
import {connect} from 'react-redux';

class MoviesTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {author: ""}
  }

 movieRow(movie, index){
   return <MovieRow title = {movie.show_title} year = {movie.release_year} category= {movie.category} rating={movie.rating}/>;
 }
  render(){
    return(
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Category</th>
              <th>Rating</th>
            </tr>
          </thead>
        <tbody>
          {this.props.movies.map(this.movieRow)}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable
