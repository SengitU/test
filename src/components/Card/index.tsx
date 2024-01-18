import React from 'react';

import check from '../../assets/check.png';
import close from '../../assets/close.png';

import './index.css';

type NameCard = {
  id: string;
  name: string;
  meaning: string;
  origin: string;
}

function Card({ card, onSelected, onRejected }: { card: NameCard, onSelected: (id: string) => unknown, onRejected: (id: string) => unknown }) {
  return (
    <section className='Card-container'>
      <img onClick={() => onRejected(card.id)} className='Card-selector' src={close} alt="Select" />
      <div className='Card-information'>
        <h3 className='Card-title'>{card.name}</h3>
        <p className='Card-meaning'>{card.meaning}</p>
        <p className='Card-origin'>{card.origin}</p>
      </div>
      <img onClick={() => onSelected(card.id)} className='Card-selector positive' src={check} alt="Dismiss" />
    </section>
  )
}

export default Card;
