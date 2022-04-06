const express = require('express')
const app = express()
const port = 8000

app.get('/contact', (req, res) => {
    res.send('Welcome to contact us page')
  })

  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })