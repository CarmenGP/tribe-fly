import React from 'react'
import DefaultCard from '../../DefaultCard/DefaultCard'
    const categoriesArr = require("../../../json/categories.json")

function CategoryCards() {
    return (
        <div className='d-flex container justify-content-md-around flex-md-row flex-column align-items-center flex-wrap gap-2 mt-4'>
            {categoriesArr.map(item => <DefaultCard type="category" info={item} img="https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg" />)}
        </div>
    )
}

export default CategoryCards