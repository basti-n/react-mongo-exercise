import React from 'react'
import Tag from './Tag'

export default function Card({ card, onToggleBookmark }) {
  return (
    <article>
      <h2>
        {card.title} (
        <span onClick={onToggleBookmark}>
          {card.bookmarked ? 'bookmarked' : 'bookmark'}
        </span>
        )
      </h2>
      <p>{card.description}</p>
      {card.tags && (
        <ul>
          {card.tags
            .filter(tag => tag !== '')
            .map(tag => (
              <Tag key={card._id + tag} text={tag} />
            ))}
        </ul>
      )}
    </article>
  )
}
