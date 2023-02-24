import React from 'react'
import bcn from '../DetailsPage/images/bcn.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import "./DetailsPage.css"
import { useLocation } from 'react-router';

function DetailsPage() {
  const stateInfo = useLocation().state

  return (
    <div className='detailsPage d-flex container-l justify-content-md-around flex-column align-items-center'>
      <Card >
        <Card.Body className='details-card-body'>
        <div className="row align-items-center">
          <div className="col-md-4">
            <Card.Img src={stateInfo.img} />
          </div>
          <div className="col-md-8">
            <Card.Text className='h4 text-md-right text-center'>{stateInfo.title}</Card.Text>
            <Card.Text className='text-md-right'>{stateInfo.description}</Card.Text>
            <button className='card-button btn btn-light'>Contactar</button>
          </div>
        </div>
      </Card.Body>
      </Card>
    </div>
  )
}

export default DetailsPage