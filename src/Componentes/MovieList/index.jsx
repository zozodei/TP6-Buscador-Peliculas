import MovieCard from '../MovieCard'
import './MovieList.css'

const MovieList = ({ peliculas, onSeleccionar }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
      {peliculas.map(pelicula => (
        <MovieCard
          key={pelicula.imdbID}
          pelicula={pelicula}
          onClick={() => onSeleccionar(pelicula.imdbID)}
        />
      ))}
    </div>
  )
}

export default MovieList