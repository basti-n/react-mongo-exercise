import React from 'react'

export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { title, description, tags } = event.target
    const newCard = {
      title: title.value,
      description: description.value,
      tags: tags.value.split(' ')
    }
    onSubmit(newCard)
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  )
}
