import './item.css'

function Item({ tarea, alEliminar, alAlternar }) {
  return (
    <article className={`item ${tarea.completada ? 'item--completada' : ''}`}>
      <div className="item__contenido">
        <div>
          <h3 className="item__texto">{tarea.texto}</h3>
          <p className="item__estado">
            {tarea.completada ? 'Completada' : 'Pendiente'}
          </p>
        </div>

        <div className="item__acciones">
          <button
            type="button"
            className="item__boton item__boton--toggle"
            onClick={() => alAlternar(tarea.id)}
          >
            {tarea.completada ? 'Marcar pendiente' : 'Marcar completada'}
          </button>
          <button
            type="button"
            className="item__boton item__boton--eliminar"
            onClick={() => alEliminar(tarea.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item