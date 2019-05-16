import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  font-style: italic;
  color: white;
  background: grey;
  position: sticky;
  top: 10px;
  padding: 4px 10px;
  border-radius: 10px;
  z-index: 2;
  &:hover {
    background: teal;
  }
`

export default function Cardlist({ cards, onToggleBookmark }) {
  return (
    <main>
      <StyledLink to='/form'>⨭ Create New Card</StyledLink>
      <section>
        {cards.map(card => (
          <Card
            key={card._id}
            {...card}
            onToggleBookmark={() => onToggleBookmark(card)}
          />
        ))}
      </section>
    </main>
  )
}
