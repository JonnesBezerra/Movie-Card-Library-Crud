import React from 'react';
import logo from './jonnesflix-logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <img className="page-title" src={ logo } alt="logo" />
      </header>
    );
  }
}

export default Header;
