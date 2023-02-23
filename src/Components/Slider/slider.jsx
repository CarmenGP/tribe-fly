import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css"
function DarkVariantExample() {
    return (
        <Carousel variant="dark" >
            <Carousel.Item >
                <img
                    className="slider"
                    src="https://img.freepik.com/foto-gratis/arbol-cartel-excursion-senderismo-primavera-carpatos-rumania-grupo-personas-mochilas_1268-19949.jpg?w=900&t=st=1677142615~exp=1677143215~hmac=706e5808c82c1bac3a0977b305c6f9c5bea5153958b2de9276b21a7baea5bf80" class="" alt="senderismo"/>

            </Carousel.Item>
            <Carousel.Item className="carousel-item" >
                
                <img
                    className="slider"
                    src="https://img.freepik.com/foto-gratis/muchacha-hermosa-que-camina-calle-ciudad-viajando-tailandia_1150-12538.jpg?w=740&t=st=1677150727~exp=1677151327~hmac=79eb2b31b0ef8dbde7d1f0b5525ac33d694f4048c2155fa50668753f9ba57439"
                    alt="barcelona"
                />

            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                
                <img
                        className="slider"
                    src="https://img.freepik.com/foto-gratis/grupo-jovenes-felices-cenando-vino_23-2148454139.jpg?w=996&t=st=1677144713~exp=1677145313~hmac=ad5b1f1b5edd99f021dcede2b4a1a39e7a1b35a42f3b2f2a638fa63451b8b772"
                    alt="amigos"
                />

            </Carousel.Item>
        </Carousel>
    );
}


export default DarkVariantExample;
