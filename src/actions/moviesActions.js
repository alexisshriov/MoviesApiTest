export function getMoviesList(director){
  return{type: 'GET_MOVIES_BY_DIRECTOR', director};
}

function loadMovies(){
  return function(dispatch){
    return fetch('https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
    .then(movies => {dispatch(getMoviesList(movies));
    }).catch(error => {throw (error);});
  };
}
