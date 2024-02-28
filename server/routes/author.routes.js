const AuthorController = require("../controllers/author.controllers")

module.exports = (app) => {
    app.get("/api/getAllAuthors", AuthorController.allAuthors)
    app.get("/api/getOneAuthor/:id", AuthorController.getOneAuthor)
    app.post("/api/createAuthor", AuthorController.newAuthor)
    app.patch("/api/updateAuthor/:id", AuthorController.updateAuthor)
    app.delete("/api/deleteAuthor/:id", AuthorController.deleteAuthor)
}