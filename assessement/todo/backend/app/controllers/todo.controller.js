const db = require("../models");
const Todo = db.todos;

exports.create = (req, res) => {
  if (!req.body.todo) {
    res.status(400).send({ message: "Todo is required" });
    return;
  }

  const todo = new Todo({
    todo: req.body.todo,
    description: req.body.description,
    deadline: req.body.deadline,
    priority: req.body.priority,
    published: req.body.published ? req.body.published : false
  });

  todo
    .save(todo)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 
          err.message || "Some error occurred while creating the todo.",
      });
    });
};

exports.findAll = (req, res) => {
  const todo = req.query.todo;
  var condition = todo
    ? { todo: { $regex: new RegExp(todo), $options: "i" } }
    : {};

  Todo.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the todos.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Todo with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
      .status(500)
      .send({ message: "Error retrieving Todo with id " + id });
    });
};

//update todo
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ 
        message: "Data to update can not be empty" });
  }
  const id = req.params.id;

  Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot update Todo with id " + id });
      } else {
        res.send({ message: "Todo was updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating Todo with id " + id });
    });
};

//Delete todo by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Todo with id ${id}. Maybe Todo was not found!`,
        });
      } else {
        res.send({
          message: `Todo was deleted successfully!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error deleting Todo with id =` + id,
      });
    });
};

//delete all todo

exports.deleteAll = (req, res) => {
  Todo.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deleteCount}Todo was deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all todo.",
      });
    });
};

//find all todo
exports.findTodo = (req, res) => {
  Todo.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all todos.",
      });
    });
};
