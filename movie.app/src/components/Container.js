import React from 'react';
import Genre from './Genre';

const Container = () => (
  <div style={{ padding: '30px', backgroundColor: '#f0f0f0' }}>
    <h1>Movie App</h1>
    <Genre 
      name="Comedy" 
      description="Fun and laughter." 
      movieTitle1={{ title: "Comedy Movie 1", year: "2021" }}
      movieTitle2={{ title: "Comedy Movie 2", year: "2022" }}
    />
    <Genre 
      name="Romance" 
      description="Love stories." 
      movieTitle1={{ title: "Romance Movie 1", year: "2020" }}
      movieTitle2={{ title: "Romance Movie 2", year: "2023" }}
    />
  </div>
);

export default Container;
