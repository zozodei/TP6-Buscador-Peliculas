import { useState, useEffect } from 'react'
import axios from 'axios'
import './MovieDetail.css'


const MovieDetail = ({ imdbID, onCerrar }) => {

  const [pelicula, setPelicula] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

  return (
    <div 
      onClick={onCerrar}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#1f1f1f',
          padding: '24px',
          borderRadius: '8px',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          color: 'white'
        }}
      >
        <button onClick={onCerrar} style={{ float: 'right' }}>Cerrar X</button>

        {loading && <p>Cargando...</p>}

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