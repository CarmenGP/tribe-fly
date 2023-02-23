import React from 'react'
import CarouselComponent from '../Slider/slider'
import WeatherPanel from '../Weather/WeatherPanel'
import CategoryCards from './CategoryCards/CategoryCards'

function MainPage() {
  return (
    <div>
        <CarouselComponent />
        <CategoryCards />
        <WeatherPanel />
    </div>
  )
}

export default MainPage