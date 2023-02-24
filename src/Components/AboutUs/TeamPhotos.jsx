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
      <div class="team">
        <div className='img-container'>
          <img src={Jasmina} alt="Jasmina" />
          <img src={Linda} alt="Linda" />
          <img src={Lucas} alt="Lucas" />
          <img src={Rodrigo} alt="Rodrigo" />
          <img src={Rocio} alt="Rocio" />
        </div>

      <div className='img-container'>
        <img src={Anyi} alt="Anyi" />
        <img src={Carmen} alt="Carmen" />
        <img src={Vanesa} alt="Vanesa" />
        <img src={Salah} alt="Salah" />
        </div>
        </div>
      
    )
  
  }

  export default TeamPhotos