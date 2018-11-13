const express = require('express')

const port = 8000

const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.use(
  '/client',
  express.static(__dirname + '/public')
)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
