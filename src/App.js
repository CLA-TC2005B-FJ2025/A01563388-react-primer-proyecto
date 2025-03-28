import React from 'react'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div><h1>Personajes de Mario Bros</h1></div>
        <Tarjeta nombre = "Mario" colorFav="Rojo"/>
        <Tarjeta nombre = "Luigi" colorFavor="Verde"/>
        <Tarjeta nombre = "Yoshi" colorFav="Verde"/>
    </div>
  )
}
