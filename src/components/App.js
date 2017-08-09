import React from 'react';
import MoviesTable from './MoviesTable';
import AuthorSearchBar from './AuthorSearchBar';
import {connect} from 'react-redux';
import {getMoviesList} from "../actions/moviesActions";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {author: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(newAuthor){
    this.setState({author: newAuthor });
  }

  handleClick(){
    fetch("https://netflixroulette.net/api/api.php?director="+this.state.author)
      .then(response => response.json())
      .then(json => {
        debugger
        this.props.dispatch(getMoviesList(json))
        debugger;
      })
  }

  render(){
    return(
      <div>
        <h1>Nexflix Movies!</h1>
        <p>Ingrese el nombre del director para ver las peliculas disponibles en netflix, (ej tarantino, spielberg etc.)</p>
        <AuthorSearchBar onChange={this.handleChange} onClick={this.handleClick} />
        <MoviesTable movies = {this.props.movies} />
      </div>
    );
  }

}
function mapStateToProps(state, ownProps){
 debugger
  return{
    movies: state.movies
  };
}
//export default App;
export default connect(mapStateToProps)(App);
