import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css"
import africa from "./imagenes/africa.jpg"
import asia from "./imagenes/asia.jpg"
import india from "./imagenes/india.jpg"
import sudamerica from "./imagenes/sudamerica.jpg"


function CarouselComponent() {
    return (
        <Carousel variant="light" >
            <Carousel.Item >
                <img class="slider " src={africa} alt="africa" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item" >
                <img className="slider" src={asia} alt="asia" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="slider" src={india} alt="india" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="slider" src={sudamerica} alt="insdafdia" />
            </Carousel.Item>
        </Carousel>
    );
}


export default CarouselComponent;
