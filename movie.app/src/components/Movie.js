import React from 'react';

const Movie = ({ title, year }) => (
  <div style={{ margin: '10px', padding: '10px', border: '1px solid gray' }}>
    <h3>{title}</h3>
    <p>Year: {year}</p>
  </div>
);

export default Movie;
