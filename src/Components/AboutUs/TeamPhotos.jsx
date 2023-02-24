import React from 'react'
import "./TeamPhotos.css"
import Jasmina from "./imagenes/Jasmina.jpg"
import Linda from "./imagenes/Linda.jpg"
import Lucas from "./imagenes/Lucas.jpg"
import Rodrigo from "./imagenes/Rodrigo.jpg"
import Rocio  from "./imagenes/Rocio.png"
import Anyi from "./imagenes/Anyi.jpg"
import Carmen from "./imagenes/Carmen.jpg"
import Vanesa from "./imagenes/Vanesa.jpg"
import Salah from "./imagenes/Salah.jpg"


function TeamPhotos() {
    return(
      <div className="team">
        <div className='img-container'>
          <a href="https://github.com/JasMarin" target="_blank"><img src={Jasmina} alt="Jasmina"/></a>
          <a href="https://github.com/LindaHG1" target="_blank"><img src={Linda} alt="Linda" /></a>
          <a href="https://github.com/Lucasibf5" target="_blank"><img src={Lucas} alt="Lucas" /></a>
          <a href="https://github.com/Rodrigo-ASJ" target="_blank"><img src={Rodrigo} alt="Rodrigo" /></a>
          <a href="https://github.com/rgermillaclopez" target="_blank"><img src={Rocio} alt="Rocio" /></a>
        </div>

      <div className='img-container align-items-center'>
        <a href="https://github.com/Anyi79" target="_blank"><img src={Anyi} alt="Anyi" /></a>
        <a href="https://github.com/CarmenGP" target="_blank"><img src={Carmen} alt="Carmen" /></a>
        <a href="https://github.com/vanessa-cp" target="_blank"><img src={Vanesa} alt="Vanesa" /></a>
        <a href="https://github.com/SalahREH" target="_blank"><img src={Salah} alt="Salah" /></a>
        </div>
        </div>
      
    )
  
  }

  export default TeamPhotos