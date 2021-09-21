import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params: { id } } } = this.props;

    const movieRequired = await movieAPI.getMovie(id);

    this.setState({
      movie: movieRequired,
      loading: false,
    });
  }

  deleteFilm = () => {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div className="movie-card-details" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={ `../MovieCardLibraryCrud/${imagePath}` } />
        <div className="movie-card-body">
          <h1 className="movie-card-title">{ `Title: ${title} `}</h1>
          <h2 className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</h2>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p className="movie-card-storyline">{ `Genre: ${genre}` }</p>
        </div>
        <div className="movie-card-rating">
          <span className="rating">{ `Rating: ${rating}` }</span>
        </div>
        <section className="buttons-section">
          <Link to="/" className="button back-button">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` } className="button edit-button">EDITAR</Link>
          <Link to="/" onClick={ this.deleteFilm } className="button delete-button">
            DELETAR
          </Link>
        </section>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
