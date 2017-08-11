import React from 'react';
import MovieImage from './MovieImage';
import MovieData from './MovieData';

class MovieProfile extends React.Component{
  render(){
    return (
      <div style={{border: 'outset', width:'50%'}}>
        <table>
          <tr>
              <td>
                <MovieImage poster={this.props.poster} />
              </td>
              <td>
                <MovieData
                  title = {this.props.title}
                  director={this.props.director}
                  year = {this.props.year}
                  category= {this.props.category}
                  rating={this.props.rating}
                  summary={this.props.summary}

                  />
              </td>
          </tr>
        </table>


      </div>
    )
  }
}
export default MovieProfile;
