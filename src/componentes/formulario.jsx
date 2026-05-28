import { useState } from 'react'
import './formulario.css'

function Formulario({ alAgregar }) {
  const [texto, setTexto] = useState('')

  const manejarEnvio = (event) => {
    event.preventDefault()
    const valor = texto.trim()
    if (!valor) {
      return
    }

    alAgregar(valor)
    setTexto('')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <label className="formulario__label" htmlFor="tarea">
        Nueva tarea
      </label>
      <div className="formulario__fila">
        <input
          id="tarea"
          className="formulario__input"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Describe tu tarea..."
        />
        <button className="formulario__boton" type="submit">
          Agregar
        </button>
      </div>
    </form>
  )
}

export default Formulario
