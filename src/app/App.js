import React, { useState, useEffect } from 'react'
import {
  getCards,
  postCard,
  saveToLocalStorage,
  getFromLocalStorage,
  patchCard
} from '../services'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Nav from '../components/Nav'
import BackButton from '../components/BackButton'
import CardsPage from '../cards/CardsPage'
import CreatePage from '../create/CreatePage'

export default function App() {
  const [cards, setCards] = useState(getFromLocalStorage('Cards') || [])

  // Component did mount
  useEffect(() => {
    getCards()
      .then(setCards)
      .catch(error => console.log(error))
  }, [])

  // Component did update
  useEffect(() => {
    saveToLocalStorage('Cards', cards)
  }, [cards])

  const handleCreateCard = async (card, history) => {
    try {
      const newCard = await postCard(card)
      setCards([...cards, newCard])
    } catch (err) {
      console.log(err)
    }

    history.push('/')
  }

  const updateCardBookmark = card => {
    patchCard({ bookmarked: !card.bookmarked }, card._id)
      .then(card => updateCardInState(card))
      .catch(err => console.log(err.message))
  }

  const updateCardInState = updatedCard => {
    const index = cards.findIndex(card => card._id === updatedCard._id)
    const updatedCards = [
      ...cards.slice(0, index),
      updatedCard,
      ...cards.slice(index + 1)
    ]
    console.log(updatedCards)
    setCards(updatedCards)
  }

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            path='/form'
            render={props => (
              <CreatePage onCreateCard={handleCreateCard} {...props} />
            )}
          />
          <Route path='/not-found' component={() => <h2>Not Found</h2>} />
          <Route
            exact
            path='/'
            render={props => (
              <CardsPage
                cards={cards}
                onToggleBookmark={updateCardBookmark}
                {...props}
              />
            )}
          />
          <Redirect from='/' to='/not-found' />
        </Switch>
      </BrowserRouter>
      <BackButton />
    </>
  )
}
