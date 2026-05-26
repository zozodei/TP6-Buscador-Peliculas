import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './Componentes/SearchBar'
import MovieList from './Componentes/MovieList'
import MovieDetail from './Componentes/MovieDetail'
import './App.css'

//compo principal
function App() {

  //guarda el texto que el usuario busco, empieza en vacio
  const [busqueda, setBusqueda] = useState('')

  //la lista de peliculas que despues le mandamos a movielist, vacio hasta que la API lo traiga
  const [peliculas, setPeliculas] = useState([])

  //Es el id de la pelicula que el usuario seleciono para ver los detalles
  const [idSeleccionado, setIdSeleccionado] = useState(null)



  useEffect(() => {

    if (busqueda === '') return //por si no hay nada escrito en la busqueda no llama a la api

    const traerPeliculas = async () => {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: import.meta.env.VITE_OMDB_API_KEY,
          s: busqueda
        }
      })
      //trae todas las peliculas que coinciden con la busqueda


      if (response.data.Response === 'True') {
        setPeliculas(response.data.Search) //le pone al array de peliculas un valor que es lo que trajo la api, osea un array de peliculas
      } else {
        setPeliculas([]) //si no trajo nada, osea no encontro ninguna pelicula, le pone un array vacio a peliculas
      }
    }

    traerPeliculas()
  }, [busqueda])

  //cada vez que bsuqueda cambie se vuelve a ejecutar el use effect



  return (
    <div style={{ padding: '40px', color: 'white' }}>
      <h1>Buscador de Películas</h1>
      <SearchBar onBuscar={setBusqueda} /> {/*le paso por props a searchbar la funcion setBusqueda, que es la que va a actualizar el estado de busqueda cada vez que el usuario haga una nueva busqueda*/}

      {peliculas.length > 0 && (
        <MovieList
          peliculas={peliculas}
          onSeleccionar={setIdSeleccionado}
        />
      )} {/*le paso por props a movielist la lista de peliculas que trajo la api, y la funcion setIdSeleccionado que se va a ejecutar cuando el usuario haga click en una pelicula para mostrar el detalle*/}

      {idSeleccionado && (
        <MovieDetail
          imdbID={idSeleccionado}
          onCerrar={() => setIdSeleccionado(null)}
        />
      )} {/*le paso por props a moviedetail el id de la pelicula que el usuario selecciono, y la funcion onCerrar que se ejecuta cuando el usuario hace click en el boton de cerrar para volver a la lista de peliculas, y esa funcion lo que hace es poner el idSeleccionado en null, osea que no hay ninguna pelicula seleccionada y se vuelve a mostrar la lista de peliculas*/}
   
    </div>
  )
}

export default App