import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './Componentes/SearchBar'
import MovieList from './Componentes/MovieList'
import MovieDetail from './Componentes/MovieDetail'
import './App.css'

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])
  const [idSeleccionado, setIdSeleccionado] = useState(null)

  useEffect(() => {
    if (busqueda === '') return

    const traerPeliculas = async () => {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: import.meta.env.VITE_OMDB_API_KEY,
          s: busqueda
        }
      })
      if (response.data.Response === 'True') {
        setPeliculas(response.data.Search)
      } else {
        setPeliculas([])
      }
    }

    traerPeliculas()
  }, [busqueda])

  return (
    <div style={{ padding: '40px', color: 'white' }}>
      <h1>Buscador de Películas</h1>
      <SearchBar onBuscar={setBusqueda} />

      {peliculas.length > 0 && (
        <MovieList
          peliculas={peliculas}
          onSeleccionar={setIdSeleccionado}
        />
      )}

      {idSeleccionado && (
        <MovieDetail
          imdbID={idSeleccionado}
          onCerrar={() => setIdSeleccionado(null)}
        />
      )}
    </div>
  )
}

export default App