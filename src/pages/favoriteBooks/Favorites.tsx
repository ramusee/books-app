import React from "react";
import './style.css'

function Favorites(){
  return(
    <section className="favorites">
      <ol className="favorites__list">
        <li className="favorites__item">Jorge Orwell "1984"</li>
        <li className="favorites__item">Evgeniy Zamyatin "We"</li>
        <li className="favorites__item">Aldous Huxley "Brave New World"</li>
      </ol>
    </section>
  )
}

export {Favorites}