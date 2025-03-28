import 'bulma/css/bulma.css'
import React from 'react'
import images from './images'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-2">
                <Tarjeta nombre="Mario" colorFavorito="Rojo" image={images.Mario}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Luigi" colorFavorito="Verde" image={images.Luigi}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Peaches" colorFavorito="Rosa" image={images.Peaches}/>
              </div>
            </div>
          </section>
        </div>
    </div>
  
  )
}