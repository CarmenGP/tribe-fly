import React from 'react'
import DefaultCard from '../../DefaultCard/DefaultCard'

function CategoryCards() {
    const categoriesArr = [{
        title: "Pueblos Rurales",
        img: ""
    }, {
        title: "Ciudades",
        img: ""
    }, {
        title: "Playa",
        img: ""
    }]
    return (
        <div className='d-flex container justify-content-md-around flex-md-row flex-column align-items-center flex-wrap gap-2 mt-4'>
            {categoriesArr.map(item => <DefaultCard type="category" info={item} img="https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg" />)}
        </div>
    )
}

export default CategoryCards