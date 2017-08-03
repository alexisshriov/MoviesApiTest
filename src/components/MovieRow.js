import React from 'react';

class MovieRow extends React.Component{
  render(){
    return(
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          {this.props.year}
        </td>
      </tr>
    );
  }
}
export default MovieRow;
