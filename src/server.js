require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;

// response step : 1.1
const { createCard, getCard, deleteCard, updateCard  } = require('./resource/Card/card.controller')
const { createUsers, updateUsers, getUsers } = require('./resource/auth/user.controller')
const { createSubmit, getSubmit, updateSubmit, deleteSubmit } = require('./resource/submit/submit.controller')
const { updateOrder, getOrder, createOrder } = require('./resource/Orders/order.controller')
const { createStripe } = require('./resource/stripe/stripe.controller')
 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// database connect
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.yjiyu.mongodb.net/Card-collection?retryWrites=true&w=majority`).then(()=>
console.log('database connected successfully')
).catch((err)=>{
    console.log(err)
})

// response step : 1

  app.post('/api/v1/cardAll', createCard)
  app.get('/api/v1/cardAll', getCard)
  app.delete('/api/v1/cardAll/:id', deleteCard)
  app.patch('/api/v1/cardAll/:id', updateCard)

  app.post('/api/v1/users', createUsers)
  app.get('/api/v1/users/:email', getUsers)
  app.patch ('/api/v1/users/:email', updateUsers)

  app.post('/api/v1/submit', createSubmit)
  app.get('/api/v1/submit/:email', getSubmit)
  app.patch ('/api/v1/submit/:email', updateSubmit)
  app.delete('/api/v1/submit/:id', deleteSubmit)

  app.post('/api/v1/order', createOrder)
  app.get('/api/v1/order/:email', getOrder)
  app.patch ('/api/v1/order/:email', updateOrder) 


  app.post('/api/v1/create_payment', createStripe)
  // app.get('/api/v1/order/:email', getOrder)
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
