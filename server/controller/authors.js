const { Author } = require('../models/author')

module.exports = {

    home: function(req,res){
        Author.find()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>console.log(res.json(err)))
    },


    createOne: function(req,res){
        const author = new Author()
        author.name = req.body.name 
        author.quotes = []
        author.save()
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{console.log(err); res.json(err)})
    },

    showOne: function(req,res){
        Author.findOne({_id: req.params.id})
            .then(data=>{
                console.log(data)
                res.json(data)
            })
            .catch(err=>{console.log(err); res.json(err)})
    },

    updateOne: function(req,res){
        Author.findOne({_id: req.params.id})
            .then(author=>{
                author.name = req.body.name
                author.save()
                    .then(data=>{
                        res.json(data)
                    })
                    .catch(err=>{res.json(err)})
            })
            .catch(err=>{err})
    },

    destroyOne: function(req,res){
        Author.findOneAndDelete({_id: req.params.id})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{res.json(err)})
    },
    
    addOne: function(req,res){
        author = Author.findOne({_id: req.params.id})
        .then(author=>{
            author.quotes.push(req.body.quote)
            author.votes.push(0)
            author.save()
                .then(data=>{
                    res.json(data)
                })
                .catch(err=>{res.json(err)})
        })
        .catch(err=>{res.json(err)})
    },   

    upVote: function(req,res){
        Author.updateOne({_id: req.params.id}, req.body, {runValidators:true})
            .then(data=>{
                res.json(data)
            })
            .catch(err=>{res.json(err)})
    },

    removeOne: function(req,res){
        author = Author.findOne({_id: req.params.id})
        .then(author=>{
            var index = req.params.index
            var temp = author.quotes[author.quotes.length-1]
            var temp2 = author.votes[author.votes.length-1]
            var target = author.quotes[index]
            target = author.quotes[author.quotes.length-1] 
            target = author.votes[author.votes.length-1] 
            author.quotes[index] = temp 
            author.votes[index] = temp2
            author.quotes.pop()
            author.votes.pop()
            author.save()
                .then(data=>{
                    res.json(data)
                })
                .catch(err=>{res.json(err)})
            })
        .catch(err=>{res.json(err)})
    },
}