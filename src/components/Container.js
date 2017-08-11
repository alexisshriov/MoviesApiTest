import React from 'react';
import MoviesTable from './MoviesTable';
import AuthorSearchBar from './AuthorSearchBar';
import {connect} from 'react-redux';
import {loadMovies} from "../actions/moviesActions";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {author: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(newAuthor){
    this.setState({author: newAuthor });
  }
  handleClick(){
      this.props.loadMoviesByAuthor(this.state.author);
  }
  searchResult(movies){
    if(movies.length >0){
      return <MoviesTable movies = {this.props.movies} />;
    }
    return <p>No data found yet.</p>;
  }

  render(){
    return(
      <div>
        <h1 style={{color: 'red'}}>Nexflix Movies!</h1>
        <p>Ingrese el nombre del director para ver las peliculas disponibles en netflix, (ej tarantino, spielberg etc.)</p>
        <AuthorSearchBar onChange={this.handleChange} onClick={this.handleClick} />
        {this.searchResult(this.props.movies)}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps){
  return{
    movies: state.movies
  };
}
function mapDispatchToProps(dispatch){
  return{
    loadMoviesByAuthor: author => dispatch(loadMovies(author))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
