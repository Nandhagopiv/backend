const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')
server.use(express.json())
server.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/shopping')

const shoppingList = mongoose.model("Model",{item:String},"shopping")

server.get('/list',(req,res)=>{
    shoppingList.find().then((data)=>{
      let retdata = data
      res.send(retdata)
    })
})

server.get('/addlist',(req,res)=>{
  const newItem = new shoppingList({
    item:req.query.item
  })

  newItem.save()
})

server.listen(5000,()=>{
    console.log('Local Server');
})