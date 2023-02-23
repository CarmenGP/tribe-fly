import React from 'react'
import './DefaultCard.css';


function DefaultCard({ type, info, img }) {
    return (type == "category" ?
        <div className="card" style={{ width: "20rem" }}>
            <div className="card-img-caption">
                <p className="card-text h4">{info}</p>
                <button className='card-button btn btn-light'>Descubrir</button>
                <img className="card-img-top" src={img} alt="Card image cap" />
                
            </div>
        </div>
        :
        <div>
            <div className="card" style={{ width: "20rem" }}>
            <div className="card-img-caption">
                <p className="card-text h4">{info.title}</p>
                <p className="card-subText h6">{info.description}</p>
                <button className='card-button btn btn-light'>Descubrir</button>
                <img className="card-img-top" src={img} alt="Card image cap" />
            </div>
        </div>
        </div>)
}

export default DefaultCard