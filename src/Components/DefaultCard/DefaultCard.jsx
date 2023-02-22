import React from 'react'
import './DefaultCard.css';


function DefaultCard({ type, info, img }) {
    return (type == "category" ?
    <div className="card" style={{width: "20rem"}}>
    <div className="card-img-caption">
      <p className="card-text">{info}</p>
      <img className="card-img-top" src={img} alt="Card image cap" />
    </div>
  </div>
    :
    <div>
        <img src={img} alt="" />
        <h2>{info.title}</h2>
        <p>{info.description}</p>
    </div>)
}

export default DefaultCard