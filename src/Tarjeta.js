import React from 'react'

export function Tarjeta(props) { 
  return (
    <div>
        <h3>Nombre:{props.nombre} </h3>
        <h3>Color Favorito: {props.colorFav} </h3>
        <br></br>
    </div>
  )
}
