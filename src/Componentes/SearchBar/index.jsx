import './SearchBar.css'

//viene desde app.jsx el onBuscar, es cuando la persona hace clcik en lo que escribio para buscar en el input
const SearchBar = ({ onBuscar }) => {


  const buscar = (e) => {
    e.preventDefault() // que no se recargue la pagina cada vez que se haga click en el boton de buscar
    const texto = e.target.busqueda.value // te trae lo que escribio la persona en el input del form de la busqueda
  
    onBuscar(texto) //ejecuta la funcion que viene de app,jsx y le pasa lo que la persona quiere buscar
  }

  //el onsubit hace que cuando la persona apriete se ejecute la funcion de buscar. 
  return (
    <form onSubmit={buscar}>
      <input type="text" name="busqueda" placeholder="Buscar película..." />
      <button>Buscar</button>
    </form>
  )
}

export default SearchBar