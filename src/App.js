import React, { Component } from 'react'
import CardList from './Cardlist'
import {
  getCards,
  postCard,
  saveToLocalStorage,
  getFromLocalStorage,
  patchCard
} from './services'
import Form from './Form'

export default class App extends Component {
  state = {
    cards: getFromLocalStorage('Cards') || []
  }

  componentDidMount() {
    getCards()
      .then(cards => this.setState({ cards: cards }))
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      saveToLocalStorage('Cards', this.state.cards)
    }
  }

  addCard = card => {
    const { cards } = this.state
    postCard(card)
      .then(newCard => {
        this.setState({ cards: [...cards, newCard] })
      })
      .catch(error => console.log(error))
  }

  updateCardBookmark = card => {
    patchCard({ bookmarked: !card.bookmarked }, card._id)
      .then(card => this.updateCardInState(card))
      .catch(err => console.log(err.message))
  }

  updateCardInState = updatedCard => {
    const { cards } = this.state

    const index = cards.findIndex(card => card._id === updatedCard._id)
    const updatedCards = [
      ...cards.slice(0, index),
      updatedCard,
      ...cards.slice(index + 1)
    ]

    this.setState({ cards: updatedCards })
  }

  render() {
    const { cards } = this.state

    return (
      <>
        <Form onSubmit={this.addCard} />
        <CardList cards={cards} onToggleBookmark={this.updateCardBookmark} />
      </>
    )
  }
}
