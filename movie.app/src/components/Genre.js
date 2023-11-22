import React from 'react';
import Movie from './Movie';

const Genre = ({ name, description, movieTitle1, movieTitle2 }) => (
  <div style={{ margin: '20px', padding: '20px', border: '2px solid black' }}>
    <h2>{name}</h2>
    <p>{description}</p>
    <Movie title={movieTitle1.title} year={movieTitle1.year} />
    <Movie title={movieTitle2.title} year={movieTitle2.year} />
  </div>
);

export default Genre;
