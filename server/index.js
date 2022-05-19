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
    params: {
      page: req.query.page,
      count: req.query.count
    },
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

app.get('/products/:product_id', (req, res) => {
  let product_id = req.params.product_id
  axios({
    url: `${apiURL}/products/${product_id}`,
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

app.get('/products/:product_id/styles', (req, res) => {
  let product_id = req.params.product_id
  axios({
    url: `${apiURL}/products/${product_id}/styles`,
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

app.get('/products/:product_id/related', (req, res) => {
  let product_id = req.params.product_id
  axios({
    url: `${apiURL}/products/${product_id}/related`,
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


app.get('/reviews', (req, res) => {
  console.log("this is the req.params", req.params.product_id)
  axios({
    url: `${apiURL}/reviews`,
    method: "GET",
    params: {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id
    },
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

app.get('/reviews/meta', (req, res) => {
  axios({
    url: `${apiURL}/reviews/meta`,
    method: "GET",
    params: {
      product_id: req.query.product_id
    },
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

app.post('/reviews', (req, res) => {
  axios({
    url: `${apiURL}/reviews`,
    method: "POST",
    data: {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      body: req.body.body,
      characteristics: req.body.characteristics
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  axios({
    url: `${apiURL}/reviews/${req.params.review_id}/helpful`,
    method: "PUT",
    data: {
      review_id: req.body.review_id
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.put('/reviews/:review_id/report', (req, res) => {
  axios({
    url: `${apiURL}/reviews/${req.params.review_id}/report`,
    method: "PUT",
    data: {
      review_id: req.body.review_id
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.get('/qa/questions', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions`,
    method: "GET",
    params: {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count
    },
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

app.get('/qa/questions/:question_id/answers', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions/${req.params.question_id}/answers`,
    method: "GET",
    params: {
      question_id: req.query.question_id,
      page: req.query.page,
      count: req.query.count
    },
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

app.post('/qa/questions', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions`,
    method: "POST",
    data: {
      product_id: req.body.product_id,
      name: req.body.name,
      email: req.body.email,
      body: req.body.body
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.post('/qa/questions/:question_id/answers', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions/${req.params.question_id}/answers`,
    method: "POST",
    data: {
      photos: req.body.photos,
      name: req.body.name,
      email: req.body.email,
      body: req.body.body
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      //console.log(err);
      res.sendStatus(404)
    })
})

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions/${req.params.question_id}/helpful`,
    method: "PUT",
    data: {
      question_id: req.body.question_id
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.put('/qa/questions/:question_id/report', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions/${req.params.question_id}/report`,
    method: "PUT",
    data: {
      question_id: req.body.question_id
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.put('/qa/questions/:answer_id/helpful', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions/${req.params.answer_id}/helpful`,
    method: "PUT",
    data: {
      answer_id: req.body.answer_id
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.put('/qa/questions/:answer_id/report', (req, res) => {
  axios({
    url: `${apiURL}/qa/questions/${req.params.answer_id}/report`,
    method: "PUT",
    data: {
      answer_id: req.body.answer_id
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.get('/cart', (req, res) => {
  axios({
    url: `${apiURL}/cart`,
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

app.post('/cart', (req, res) => {
  axios({
    url: `${apiURL}/cart`,
    method: "post",
    data: {
      sku_id: req.body.sku_id,
      count: req.body.count
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404)
    })
})

app.post('/interactions', (req, res) => {
  axios({
    url: `${apiURL}/interactions`,
    method: "post",
    data: {
      element: req.body.element,
      widget: req.body.widget,
      time: req.body.time
    },
    headers: {'Authorization': `${process.env.TOKEN}`, 'contentType': 'application/json'}
  })
    .then((data) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(422)
    })
})

// cart API
// Interactions API
// Reviews API
// QA API
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})