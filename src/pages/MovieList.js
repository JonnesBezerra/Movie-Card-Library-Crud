import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log('DidMount');
    this.fetchMovies();
    console.log('DidMount end');
  }

  fetchMovies = async () => {
    console.log('fetchMovies func');
    const requestedMovies = await movieAPI.getMovies();
    // console.log(requestedMovies);
    this.setState({
      movies: requestedMovies,
    });
    console.log('fetch end');
  };

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <p>Home / </p>
        {console.log('Render MovieList')}
        {/* {console.log(movies)} */}
        { movies.length
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading /> }
        {console.log('Render end')}
      </div>
    );
  }
}

export default MovieList;
