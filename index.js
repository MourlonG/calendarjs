const express = require('express')
const db = require('./db')

const port = 8000

const app = express()

const jsonMiddleware = express.json()
app.use(jsonMiddleware)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/api/todos', (req, res) => {
  db.getAll()
    // .then(items => res.send(items))
    .then(items => {
      console.log(items)
      res.send(items)
    })
    .catch(err => {
      res.sendStatus(500)
      console.error(err)
    })
})

app.post('/api/todos', (req, res) => {
  console.log(req.body)
  const itemData = req.body
  db.create(req.body)
    .then(newItem => res.send(newItem))
    .catch(err => {
      res.sendStatus(500)
      console.error(err)
    })
})

app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id

    console.log(id+" en cours de suppression")

    db.remove(id)
    .then(function() {
        res.sendStatus(200)
    })
    .catch(err => {
        res.sendStatus(500)

        console.error(err)
    })
})

app.get('/movies', (req, res) => {
  if (req.accepts('json')) {
    const data = [
      {id: 1, text: "Item 1"},
      {id: 2, text: "Item 2"},
    ]
    res
      .header({
        'Content-Type': 'application/json',
      })
      .json(data)
  } else {
    res.sendStatus(406)
  }
})

app.post('/movies', (req, res) => {
  console.log(req.body)
})

app.use(
  '/client',
  express.static(__dirname + '/public')
)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
