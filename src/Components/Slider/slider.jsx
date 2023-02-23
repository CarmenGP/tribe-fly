import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css"
import img from "./imagenes/img1.jpg"
function DarkVariantExample() {
    return (
        <Carousel variant="dark" >
            <Carousel.Item >
                <img
                    className="slider"
                    src={img} class="" alt="senderismo"/>

            </Carousel.Item>
            <Carousel.Item className="carousel-item" >
                
                <img
                    className="slider"
                    src="https://cdn.g4media.ro/wp-content/uploads/2022/12/apele-romane.jpg"
                    alt="barcelona"
                />

            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                
                <img
                        className="slider"
                    src="https://tourismexpress.com/photos/images/PLanete.png"
                    alt="amigos"
                />

            </Carousel.Item>
        </Carousel>
    );
}


export default DarkVariantExample;
