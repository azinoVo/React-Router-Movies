import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  //pushes the movie in state from Movie into the savedList array; set the 
  //savedList into the current with the new movie added

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };


// Passing props using Route
// <Route path="/avengers/:id/movies" render={() => <AvengerMovies avenger={avenger} />}>

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        
        <Route exact path='/' component={MovieList} />
        {/* <Route path='/movies/:id' component={Movie} /> */}
        <Route path='/movies/:id' render={props => (<Movie {...props} addToSavedList={this.addToSavedList} />)} />
      </div>
    );
  }
}
