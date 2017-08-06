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
      </tr>
    );
  }
}
MovieRow.propTypes = {
  title: PropTypes.object.isRequired,
  year: PropTypes.object.isRequired
};
export default MovieRow;
