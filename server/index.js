const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const axios = require('axios')
const path = require('path')

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.urlencoded({extended:true}))
// products API

app.get('/products', (req, res) => {
  axios({
    url: `${apiURL}/products`,
    method: "GET",
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.json((data.data)).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

// cart API
// Interactions API
// Reviews API
// QA API
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})