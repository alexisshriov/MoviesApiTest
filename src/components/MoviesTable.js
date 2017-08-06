import React from 'react';
import MovieRow from './MovieRow';
import {connect} from 'react-redux';

class MoviesTable extends React.Component{
  render(){
    return(
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
        <tbody>
          <MovieRow title="title1" year="1991"/>
          <MovieRow title="title2" year="1992"/>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    movies: state.movies
  };
}
function mapDispatchToProps(){

}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesTable);
