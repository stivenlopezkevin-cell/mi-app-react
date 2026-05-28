import './filtros.css'

function Filtros({ busqueda, filtro, onBuscar, onCambiarFiltro }) {
  return (
    <section className="filtros">
      <div className="filtros__busqueda">
        <label className="filtros__label" htmlFor="buscar">
          Buscar tareas
        </label>
        <input
          id="buscar"
          className="filtros__input"
          type="text"
          value={busqueda}
          onChange={(e) => onBuscar(e.target.value)}
          placeholder="Buscar por texto"
        />
      </div>

      <div className="filtros__opciones">
        <button
          type="button"
          className={`filtros__boton ${filtro === 'todas' ? 'filtros__boton--activo' : ''}`}
          onClick={() => onCambiarFiltro('todas')}
        >
          Todas
        </button>
        <button
          type="button"
          className={`filtros__boton ${filtro === 'pendientes' ? 'filtros__boton--activo' : ''}`}
          onClick={() => onCambiarFiltro('pendientes')}
        >
          Pendientes
        </button>
        <button
          type="button"
          className={`filtros__boton ${filtro === 'completadas' ? 'filtros__boton--activo' : ''}`}
          onClick={() => onCambiarFiltro('completadas')}
        >
          Completadas
        </button>
      </div>
    </section>
  )
}

export default Filtros
