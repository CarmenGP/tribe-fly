import React, { useState } from 'react'
import DefaultCard from '../../DefaultCard/DefaultCard'
import "./CategoryCards.css"

function CategoryCards() {
    const productsArr = [{
        title: "Barcelona",
        plan: "Tour de una tarde con guía."
      }, {
        title: "Valencia",
        plan: "4 días del 1/03 - 4/03 (Fallas)"
      }, {
        title: "Los Roques",
        plan: "9 días con guía local nativo",
        description: "Si estás buscando una experiencia inolvidable en el Caribe, no busques más allá de Los Roques. Explora visitando las pequeñas comunidades pesqueras y pueblos en la isla,podrás disfrutar de la comida local y aprender sobre la forma de vida en esta hermosa región, una pareja enamorada de la isla te enseñará este maravilloso lugar  y  podrás convivir con una familia autóctona que no te dejará indiferente."
      }, {
        title: "Guadalajara, México",
        plan: "Tour de una tarde con guía."
      }, {
        title: "keralta, India",
        plan: "Tour de 3 días."
      }, {
        title: "Selva de Irati",
        plan: "2 días con guía local"
      }, {
        title: "Bangkok, Taliandia",
        plan: "5 días en abril con guía nativo"
      }, {
        title: "Madagascar",
        plan: "2 semanas en mayo (15-29)"
      }, {
        title: "Canaima, Venezuela",
        plan: "1 semana en verano (20-27)"
      }]
    
      const categoriesArr = [{
        title: "Pueblos Rurales",
        img: ""
      }, {
        title: "Pueblos Rurales",
        img: ""
      }, {
        title: "Pueblos Rurales",
        img: ""
      }]
      let [products, setProducts] = useState(productsArr)

      const handleChange = (e) => {
        let newArr = productsArr.filter(item => item.title.toUpperCase().includes(e.target.value.toUpperCase()))
        setProducts(newArr)
      }


  return (
    <div className='d-flex container justify-content-md-around flex-md-row flex-column align-items-center flex-wrap gap-2'>
        <input type="text" name="a" id="" onChange={handleChange}/>
        {products.map(item => <DefaultCard  type="product" info={item} img="https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg"/>)}
    </div>
  )
}

export default CategoryCards