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
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const requestedMovies = await movieAPI.getMovies();
    this.setState({
      movies: requestedMovies,
    });
  };

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list" data-testid="movie-list">
        { movies.length
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
