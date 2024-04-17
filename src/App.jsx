import { useState } from "react"
import { uploadFile } from "./database/fireBase"
function App() {
  const [file, setFile] = useState(null)
  const [urlFile, setUrlFile] = useState(null)  

  async function archivoFinal(e) {
    e.preventDefault()
    const resultado = await uploadFile(file)
    setUrlFile(resultado)
  }

  return (
    <section className="contenido">
      <div className="container">
        <form onSubmit={archivoFinal} action="#" method="post" encType="multipart/form-data">
          <input onChange={(e) => { setFile(e.target.files[0]) }} type="file" name="file-upload" id="file-upload" />
          <label htmlFor="file-upload" className="custom-file-upload">Seleccionar Archivo</label>
          <button onClick={uploadFile} type="submit" className="submit-btn">Enviar</button>
        </form>
      </div>
      <section className="galeria">
        <img src={urlFile} alt="Imagen" />
      </section>
    </section>
  )
}

export default App
