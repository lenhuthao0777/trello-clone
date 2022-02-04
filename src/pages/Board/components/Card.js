import React from 'react'
import '../assets/_card.scss'
function Card({ card, index }) {
  return (
    <div className='card-item'>
      {card.cover && <img className='card-img' src={card.cover} alt='dev' />}
      <p className='card-title'>{card.title}</p>
    </div>
  )
}

export default Card
