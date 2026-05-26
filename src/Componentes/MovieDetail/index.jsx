import { useState, useEffect } from 'react'
import axios from 'axios'
import './MovieDetail.css'


//le llega el id de la pelicula y el boton que cierra el detalle de la peli (y volves a la lista de peliculas)
const MovieDetail = ({ imdbID, onCerrar }) => {

  const [pelicula, setPelicula] = useState(null) // la peli empeiza en null xq todavia no llamamos a la API y despues se va a llenar con la info de la peli
  const [loading, setLoading] = useState(true) //esto es para mostrar un mensaje de "cargando..." mientras esperamos la respuesta de la API, y despues se pone en false cuando ya tenemos la info de la peli

  useEffect(() => {

    //espera la respuesta de la api usando el await, por eso es asincronica 
    const traerDetalle = async () => {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: import.meta.env.VITE_OMDB_API_KEY,
          i: imdbID
        }
      })
      setPelicula(response.data)
      setLoading(false)
    }
    traerDetalle()
  }, [imdbID])

   //el stopPropagation es para que cuando haga click en el fondo se cierre el detalle, pero si hago click adentro del detalle no se cierre, porque sino se propagaria el click al fondo y se cerraria el detalle
  return (
    <div 
    onClick={onCerrar} style={{position: 'fixed', inset: 0,background: 'rgba(0,0,0,0.8)',display: 'flex',alignItems: 'center',justifyContent: 'center',zIndex: 100 }}
    >

  
      <div 
      onClick={(e) => e.stopPropagation()} style={{background: '#1f1f1f',padding: '24px',borderRadius: '8px',maxWidth: '600px',maxHeight: '90vh',overflowY: 'auto',color: 'white'}}
      >


      <button onClick={onCerrar} style={{ float: 'right' }}>Cerrar X</button>
        {loading ? (<p>Cargando...</p>) : null}

  // si la pelicula existe te muestra los detalles y si no, nada. 
        {pelicula && (
          <div>
            <h2>{pelicula.Title}</h2>
            <img src={pelicula.Poster} alt={pelicula.Title} style={{ maxWidth: '200px' }} />
            <p><strong>Año:</strong> {pelicula.Year}</p>
            <p><strong>Género:</strong> {pelicula.Genre}</p>
            <p><strong>Director:</strong> {pelicula.Director}</p>
            <p><strong>Actores:</strong> {pelicula.Actors}</p>
            <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
            <p><strong>Duración:</strong> {pelicula.Runtime}</p>
            <p><strong>Idioma:</strong> {pelicula.Language}</p>
            <p><strong>País:</strong> {pelicula.Country}</p>
            <p><strong>IMDb:</strong> {pelicula.imdbRating}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieDetail