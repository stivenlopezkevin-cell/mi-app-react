import { useEffect, useState } from 'react'
import Encabezado from './componentes/encabezado'
import Formulario from './componentes/formulario'
import Filtros from './componentes/filtros'
import Lista from './componentes/lista'
import PiePagina from './componentes/piepagina'
import './App.css'

const STORAGE_KEY = 'mi-app-react-tareas'
const tareasIniciales = [
  { id: 1, texto: 'Estudiar React', completada: false },
  { id: 2, texto: 'Hacer ejercicio', completada: true },
  { id: 3, texto: 'Leer 10 páginas', completada: false }
]

function obtenerTareasIniciales() {
  try {
    const guardadas = window.localStorage.getItem(STORAGE_KEY)
    return guardadas ? JSON.parse(guardadas) : tareasIniciales
  } catch (error) {
    return tareasIniciales
  }
}

function App() {
  const [tareas, setTareas] = useState(obtenerTareasIniciales)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('todas')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = (textoNuevo) => {
    const tareaNueva = {
      id: Date.now(),
      texto: textoNuevo,
      completada: false
    }

    setTareas([...tareas, tareaNueva])
    setMostrarFormulario(false)
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  const alternarCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    )
  }

  const terminoBusqueda = busqueda.toLowerCase().trim()
  const tareasFiltradas = tareas.filter((tarea) => {
    const textoLower = tarea.texto.toLowerCase()
    const coincideBusqueda = textoLower.includes(terminoBusqueda)

    if (!coincideBusqueda) {
      return false
    }

    if (filtro === 'pendientes') {
      return !tarea.completada
    }

    if (filtro === 'completadas') {
      return tarea.completada
    }

    return true
  })

  const total = tareas.length
  const completadas = tareas.filter((tarea) => tarea.completada).length
  const pendientes = total - completadas

  return (
    <div className="app">
      <div className="app__contenedor">
        <Encabezado
          titulo="Mi gestor de tareas"
          subtitulo="Agrega, filtra y guarda tus tareas automáticamente"
        />

        <div className="app__barra">
          <button
            type="button"
            className="boton-toggle"
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            {mostrarFormulario ? 'Ocultar formulario' : 'Agregar tarea'}
          </button>
        </div>

        {mostrarFormulario && <Formulario alAgregar={agregarTarea} />}

        <Filtros
          busqueda={busqueda}
          filtro={filtro}
          onBuscar={setBusqueda}
          onCambiarFiltro={setFiltro}
        />

        <Lista
          tareas={tareasFiltradas}
          alEliminar={eliminarTarea}
          alAlternar={alternarCompletada}
        />

        <PiePagina total={total} completadas={completadas} pendientes={pendientes} />
      </div>
    </div>
  )
}

export default App