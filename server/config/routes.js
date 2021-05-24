const Author = require('../controller/authors')
const { AuthorSchema } = require('../models/author')

module.exports = function(app){

    app.get('/', (req,res)=>{
        
    })

    app.get('/authors', (req,res)=>{
        Author.home(req,res)
    })

    app.post('/new/author', (req,res)=>{
       Author.createOne(req,res)
    })

    app.get('/show/:id', (req,res)=>{
        Author.showOne(req,res)
    })

    app.put('/update/:id', (req,res)=>{
        Author.updateOne(req,res)
    })

    app.delete('/delete/:id', (req,res)=>{
        Author.destroyOne(req,res)
    })

    app.post('/add/quote/:id',(req,res)=>{
        Author.addOne(req,res)
    })

    app.put('/upvote/:id', (req,res)=>{
        Author.upVote(req,res)
    })
    app.delete('/remove/quote/:index/:id', (req,res)=>{
        Author.removeOne(req,res)
    })

}