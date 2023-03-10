import React, { useState } from 'react'
import DefaultCard from '../../DefaultCard/DefaultCard'
import { v4 as uuidv4 } from 'uuid';
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
          {plans.map(item => <DefaultCard key={uuidv4()} type="product" info={item} img={item.img} />)}
        </div>
    </div>
  )
}

export default MarketCards