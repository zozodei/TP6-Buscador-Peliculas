import './MovieCard.css'

// desde movieList le paso la pelicula y el onClick, que es la funcion que se ejecuta cuando hago click en la pelicula, y esa funcion se encarga de mostrar el detalle de la pelicula
const MovieCard = ({ pelicula, onClick }) => {

  const apretarClick = () => {
    console.log('click en:', pelicula.Title)
    onClick()
  }

  return (
    //cursor pointer 
    <div onClick={apretarClick} style={{ cursor: 'pointer', background: '#1f1f1f', padding: '10px', borderRadius: '8px' }}> 
      <img src={pelicula.Poster} alt={pelicula.Title} style={{ width: '100%' }} />
      <h3>{pelicula.Title}</h3>
      <p>{pelicula.Year}</p>
      <p>{pelicula.Type}</p>
    </div>
  )
}

export default MovieCard;