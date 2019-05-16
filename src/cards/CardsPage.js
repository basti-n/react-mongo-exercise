import React from 'react'
import Cardlist from './Cardlist'
import { StyledHeadline } from '../StyledComponents/Headline'

export default function CardsPage({ cards, onToggleBookmark }) {
  return (
    <>
      <StyledHeadline>Cardspage</StyledHeadline>
      <Cardlist cards={cards} onToggleBookmark={onToggleBookmark} />
    </>
  )
}
