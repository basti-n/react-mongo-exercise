import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledForm = styled.form`
  background: white;
  padding: 20px;
  display: grid;
  grid-auto-rows: 50px;

  label {
    font-size: 14px;
    display: grid;
    grid-template-columns: 80px 1fr;
    justify-content: space-around;
    align-items: center;
  }

  button {
    background: teal;
    color: white;
    font-weight: bolder;
    &:hover {
      transform: scale(1.03);
    }
  }
`

export default function Form({ onCreateCard }) {
  function handleCreateCard(event) {
    event.preventDefault()
    const { title, description, tags } = event.target
    const newCard = {
      title: title.value,
      description: description.value,
      tags: tags.value.split(' ').map(tag => tag.trim())
    }
    onCreateCard(newCard)
    event.target.reset()
  }

  return (
    <StyledForm onSubmit={handleCreateCard}>
      <label>
        Title
        <input type='text' placeholder='Title' name='title' />
      </label>
      <label>
        Description
        <input type='text' placeholder='Description' name='description' />
      </label>
      <label>
        Tags <input type='text' placeholder='Tags' name='tags' />
      </label>
      <button>Add New Card</button>
    </StyledForm>
  )
}

StyledForm.propTypes = {
  handleCreateCard: PropTypes.array
}
