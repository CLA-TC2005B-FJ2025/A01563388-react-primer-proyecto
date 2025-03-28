import React from 'react'
import images from './images'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div><h1>Personajes de Mario Bros</h1></div>
        <Tarjeta nombre = "Mario" colorFav="Rojo" img={images.Mario}/>
        <Tarjeta nombre = "Luigi" colorFavor="Verde" img={images.Luigi}/>
        <Tarjeta nombre = "Peaches" colorFav="Pink" img={images.Peaches}/>
    </div>
  )
}
