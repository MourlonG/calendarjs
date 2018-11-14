const express = require('express')

const port = 8000

const app = express()

const jsonMiddleware = express.json()
app.use(jsonMiddleware)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
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
