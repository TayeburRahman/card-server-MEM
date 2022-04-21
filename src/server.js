require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 ;

// response step : 1.1
const { getProduct, postProduct, updateProduct, deleteProduct } = require('./resource/product/product.controller')
const { createCard, getCard, deleteCard, updateCard  } = require('./resource/Card/card.controller')
const { createUsers, updateUsers, getUsers } = require('./resource/auth/user.controller')


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
  app.get('/api/v1/product', getProduct)
  app.post('/api/v1/product', postProduct) 
  app.delete('/api/v1/product', deleteProduct)
  app.post('/api/v1/cardAll', createCard)
  app.get('/api/v1/cardAll', getCard)
  app.delete('/api/v1/cardAll/:id', deleteCard)
  app.patch('/api/v1/cardAll/:id', updateCard)
  app.post('/api/v1/users', createUsers)
  app.get('/api/v1/users/:email', getUsers)
  app.patch('/api/v1/users/:email', updateUsers)
 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
