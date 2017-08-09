import React, {PropTypes} from 'react';

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
        <td>
          {this.props.category}
        </td>
        <td>
          {this.props.rating}
        </td>

      </tr>
    );
  }
}
MovieRow.propTypes = {
  title: React.PropTypes.oneOfType([
      PropTypes.object.isRequired,
      React.PropTypes.string
    ]),
  year: React.PropTypes.oneOfType([
      PropTypes.object.isRequired,
      React.PropTypes.string
    ])
};
export default MovieRow;
