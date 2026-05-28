import './encabezado.css'

function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="encabezado">
      <div className="encabezado__contenido">
        <h1 className="encabezado__titulo">{titulo}</h1>
        <p className="encabezado__subtitulo">{subtitulo}</p>
      </div>
    </header>
  )
}

export default Encabezado