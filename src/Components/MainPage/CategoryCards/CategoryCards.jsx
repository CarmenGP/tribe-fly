import React from 'react'
import DefaultCard from '../../DefaultCard/DefaultCard'
import { v4 as uuidv4 } from 'uuid';
const categoriesArr = require("../../../json/categories.json");

function CategoryCards() {
    return (
        <div className='d-flex container justify-content-md-around flex-md-row flex-column align-items-center flex-wrap gap-2 mt-4'>
            {categoriesArr.map(item => <DefaultCard key={uuidv4()} type="category" info={item} img={item.img} />)}
        </div>
    )
}

export default CategoryCards