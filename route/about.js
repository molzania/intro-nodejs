const express = require('express')
const app = express()
const port = 8000

app.get('/about', (req, res) => {
    res.send('Welcome to about us page')
  })

  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })