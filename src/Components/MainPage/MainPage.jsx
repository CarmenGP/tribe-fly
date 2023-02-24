import React from 'react'
import CarouselComponent from '../Slider/slider'
import WeatherPanel from '../Weather/WeatherPanel'
import CategoryCards from './CategoryCards/CategoryCards'
import "./MainPage.css"

function MainPage() {
  return (
    <div className='mainPage'>
        <CarouselComponent />
            <div className="mainPage-card card-body">
            <p className='card-text text-center text-dark'>La filosofía del viajero se singulariza precisamente por permanecer lejos del abrigo de cualquier puerto seguro. Su vocación consiste en volver a casa con las buenas nuevas, los regalos exóticos y las narraciones nostálgicas de mundos maravillosos.</p>
            </div>
        <CategoryCards />
        <WeatherPanel />
    </div>
  )
}

export default MainPage