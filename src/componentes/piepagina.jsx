import './piepagina.css'

function PiePagina({ total, completadas, pendientes }) {
  return (
    <footer className="piepagina">
      <p className="piepagina__texto">
        Total: <strong>{total}</strong> · Completadas: <strong>{completadas}</strong> · Pendientes: <strong>{pendientes}</strong>
      </p>
      <p className="piepagina__nota">Los cambios se guardan automáticamente en el navegador.</p>
    </footer>
  )
}

export default PiePagina