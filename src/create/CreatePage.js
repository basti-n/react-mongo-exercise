import React from 'react'
import Form from './Form'
import { StyledHeadline } from '../StyledComponents/Headline'

export default function CreatePage({ onCreateCard, history }) {
  return (
    <section>
      <StyledHeadline>Create</StyledHeadline>
      <Form onCreateCard={card => onCreateCard(card, history)} />
    </section>
  )
}
