import React from 'react';

class MovieData extends React.Component{
  render(){
    return (
      <div style={{width: '100%'}}>
        <h1>{this.props.title}</h1>
        <p><b>Director:</b> {this.props.director}</p>
        <p><b>Year:</b> {this.props.year}</p>
        <p><b>Category</b>: {this.props.category}</p>
        <p><b>Rating</b>: {this.props.rating}</p>
        <p><b>Summary</b>: {this.props.summary}</p>
      </div>
    )
  }
}
export default MovieData;
