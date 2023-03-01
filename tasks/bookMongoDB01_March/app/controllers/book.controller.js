const Book = require("../models/book.models.js");

//Create and Save a new Book

exports.create = (req, res) => {
  if (req.body.content) {
    return res.status(400).send({
      message: "Book content can not be empty",
    });
  }

  // Create a Book
  const book = new Book({
    bookName: req.body.bookName || "No book name",
    price: req.body.price,
    noOfPages: req.body.noOfPages
  });

  //Save Book in the database
  book
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the book.",
      });
    });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
    console.log("good");
    Book.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};

//Find a single Book with an id

exports.findOne = (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Book not found with id " + req.params.id,
      });
    });
};

//update a Book by the id in the request
exports.update = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Book content can not be empty",
    });
  }

  Book.findByIdAndUpdate(
    req.params.id,
    {
      bookName: req.body.bookName || "Untiled Book",
      price: req.body.price || 0,
    },
    { new: true }
  )
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating Book with id " + req.params.id,
      });
    });
};

// Delete a Book with the specified id in the request

exports.delete = (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      res.send({ message: "Book deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete Book with id " + req.params.id,
      });
    });
};
