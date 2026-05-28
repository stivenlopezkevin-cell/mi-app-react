import Item from './item'
import './lista.css'

function Lista({ tareas, alEliminar, alAlternar }) {
  if (tareas.length === 0) {
    return <div className="lista lista--vacia">No hay tareas para mostrar.</div>
  }

  return (
    <section className="lista">
      {tareas.map((tarea) => (
        <Item
          key={tarea.id}
          tarea={tarea}
          alEliminar={alEliminar}
          alAlternar={alAlternar}
        />
      ))}
    </section>
  )
}

export default Lista