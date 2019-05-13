import React from 'react'
import Card from './Card'

export default function Cardlist({ cards, onToggleBookmark }) {
  return (
    <main>
      <h1>Cards</h1>
      <section>
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onToggleBookmark={() => onToggleBookmark(card)}
          />
        ))}
      </section>
    </main>
  )
}
