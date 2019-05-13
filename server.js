const setupServer = require('./setup-server')
const app = setupServer()

const Card = require('./models/Card')

app.get('/cards', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

app.post('/cards', (req, res) => {
  const { title, description, tags } = req.body
  const card = { title, description, tags }
  Card.create(card)
    .then(card => res.status(201).json(card))
    .catch(err => res.status(500).json(err))
})

app.delete('/cards', (req, res) => {
  Card.remove()
    .then(res => res.send('All Cards Deleted'))
    .catch(err => res.json(err))
})

app.patch('/cards/:id', (req, res) => {
  const { id } = req.params

  Card.findByIdAndUpdate(id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err))
})
