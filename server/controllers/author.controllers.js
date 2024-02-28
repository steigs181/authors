const Author = require("../models/author.model")

module.exports = {

    //GET
    allAuthors: (req, res) => {
        Author.find({})
        .then((authors)=> {
            res.json(authors)
        })
        .catch( err => {
            res.json({ message: "Something went wrong in the get all controllers", error: err})
        })
    },
    getOneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id})
            .then(oneAuthor => {
                res.status(200).json({author: oneAuthor})
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in get one controllers", error: err})
            })
    },

    //CREATE
    newAuthor: (req, res) => {
        Author.create(req.body)
            .then( newAuthor => {
                res.status(200).json({ author: newAuthor})
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in create controllers", error: err})
            })
    },

    //UPDATE
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true, runValidators: true, })
            .then( updateAuthor => {
                res.status(200).json({ author: updateAuthor})
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in update controllers", error: err})
            })
    },

    //DELETE
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id})
            .then( deleted => {
                res.status(200).json(deleted)
            })
            .catch( err => {
                res.status(500).json({ message: "Something went wrong in delete controllers", error: err})
            })
    }
}