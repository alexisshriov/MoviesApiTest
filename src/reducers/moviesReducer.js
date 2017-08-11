export default function moviesReducer(state = [], action){
  switch(action.type){
    case "GET_MOVIES_BY_DIRECTOR":
      return action.movies;
    default:
      return state;
  }
}
