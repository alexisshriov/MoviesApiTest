import React from 'react';

class MovieImage extends React.Component{
  render(){
    return (
      <div><img  src={this.props.poster} onError={(event)=>event.target.setAttribute("src","http://www.abortionno.org/wp-content/uploads/2016/02/no-image-found.jpg")}style={{width: 200, height: 300}}/></div>
    )
  }
}

export default MovieImage
