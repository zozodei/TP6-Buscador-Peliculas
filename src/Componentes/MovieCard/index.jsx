const MovieCard = ({ pelicula, onClick }) => {

  const manejarClick = () => {
    console.log('Click en:', pelicula.Title)
    onClick()
  }

  return (
    <div onClick={manejarClick} style={{ cursor: 'pointer', background: '#1f1f1f', padding: '10px', borderRadius: '8px' }}>
      <img src={pelicula.Poster} alt={pelicula.Title} style={{ width: '100%' }} />
      <h3>{pelicula.Title}</h3>
      <p>{pelicula.Year}</p>
      <p>{pelicula.Type}</p>
    </div>
  )
}

export default MovieCard