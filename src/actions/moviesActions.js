export function getMoviesList(movies){
  debugger;
  return{type: 'GET_MOVIES_BY_DIRECTOR', movies};
}

export function loadMovies(director) {
  debugger
  return dispatch => {
    return fetch("https://netflixroulette.net/api/api.php?director=" + director)
      .then(response => response.json())
      .then(json => {
        dispatch(getMoviesList(json))
      })
  }
}
