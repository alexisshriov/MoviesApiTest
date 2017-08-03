import React from 'react';
import MoviesTable from './MoviesTable';
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Nexflix Movies!</h1>
        <MoviesTable/>
      </div> 
    );
  }
}
export default App;
