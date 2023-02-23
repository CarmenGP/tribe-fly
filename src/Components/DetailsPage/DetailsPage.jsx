import React from 'react'
import bcn from '../DetailsPage/images/bcn.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function DetailsPage() {
  return (
<Card>
  <Card.Body>
    <div className="row">
      <div className="col-md-4">
        <Card.Img src={bcn} />
      </div>
      <div className="col-md-8">
      <Card.Title>Barcelona, España</Card.Title>
        <Card.Text>
  Explora Barcelona y su cultura desde lo más profundo con nosotros. Descubre los lugares más emblemáticos de la ciudad, pero también explora los barrios menos turísticos para conocer la vida cotidiana de sus habitantes. Disfruta de la deliciosa gastronomía catalana en los restaurantes más auténticos. Nuestros guías locales te contarán historias y anécdotas sobre la ciudad y su cultura, y te llevarán a los rincones más especiales y escondidos que solo conocen los locales. Desde la arquitectura modernista de Gaudí hasta los monumentos históricos de la ciudad, no te pierdas esta experiencia única para conocer Barcelona desde adentro.

        </Card.Text>
      </div>
    </div>
  </Card.Body>
</Card>


  )
}

export default DetailsPage