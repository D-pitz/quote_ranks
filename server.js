const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/author', {useNewUrlParser: true})

app.use(express.static(__dirname + '/public/dist/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))

require('./server/config/routes')(app)

app.all("*", (req,res,next) => {
    res.sendFile(__dirname + "/public/dist/public/index.html")
  });

  
app.listen(8000, ()=>{
    console.log('listening on port 8000')
})
