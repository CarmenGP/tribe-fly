import React, { useState } from 'react'
import DefaultCard from '../../DefaultCard/DefaultCard'
const plansArr = require("../../../json/destinations.json")

function MarketCards() {
    

      let [plans, setPlans] = useState(plansArr)

      const handleChange = (e) => {
        let newArr = plansArr.filter(item => item.title.toUpperCase().includes(e.target.value.toUpperCase()))
        setPlans(newArr)
      }


  return (
    <div className='d-flex container justify-content-md-around flex-column align-items-center'>
        <input className="mb-3 mt-3 w-50" type="text" onChange={handleChange}/>
        <div className='d-flex container justify-content-md-around flex-md-row flex-column align-items-center flex-wrap gap-2'>
          {plans.map(item => <DefaultCard  type="product" info={item} img="https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg"/>)}
        </div>
    </div>
  )
}

export default MarketCards