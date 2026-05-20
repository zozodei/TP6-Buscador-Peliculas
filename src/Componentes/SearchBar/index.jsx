const SearchBar = ({ onBuscar }) => {

  const buscar = (e) => {
    e.preventDefault()
    const texto = e.target.busqueda.value
    console.log('Texto del input:', texto)
    console.log('onBuscar es:', onBuscar)
    onBuscar(texto)
    console.log('Después de llamar a onBuscar')
  }

  return (
    <form onSubmit={buscar}>
      <input type="text" name="busqueda" placeholder="Buscar película..." />
      <button>Buscar</button>
    </form>
  )
}

export default SearchBar