import React, { useState } from "react";

const MovieList = () => {
  const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
};

const NoMovies = () => <p>No hay películas</p>;

const App = () => {
  const [sesion, setSesion] = useState(true);

  return (
    <div>
      <h1>Películas</h1>
      {sesion ? <MovieList /> : <NoMovies />}
      <button onClick={() => setSesion(!sesion)}>
        {sesion ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default App;
