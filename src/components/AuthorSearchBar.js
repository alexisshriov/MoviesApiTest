import React from 'react';
import {loadMovies} from '../actions/moviesActions';

class AuthorSearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
     this.props.onChange(event.target.value);
   }

  handleClick() {
    this.props.onClick();
 }
  render(){
    return(
      <div>
        <input type="text" placeholder ="Search Author"  onChange={this.handleChange}/>
        <button type="button" onClick ={this.handleClick}>search</button>
      </div>

    );
  }
}
export default AuthorSearchBar;
