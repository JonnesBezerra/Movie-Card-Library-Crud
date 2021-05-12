import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

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
    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div className="home">
        <Link className="button add-movie-button" to="/movies/new">ADICIONAR CARTÃO</Link>
        <div className="movie-list" data-testid="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

export default MovieList;
