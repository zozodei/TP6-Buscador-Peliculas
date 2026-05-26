import MovieCard from '../MovieCard'
import './MovieList.css'


// el onSeleccionar es lo que se ejecuta cuando hago click en una pelicula, te lleva a los detalles y ademas le pasamos por props tambien las peliculas, para mostrar la lista de peliculas.

const MovieList = ({ peliculas, onSeleccionar }) => {

//mapeamos lo que nos trajo la api, osea un array de peliculas, y por cada pelicula hacemos una moviecard
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