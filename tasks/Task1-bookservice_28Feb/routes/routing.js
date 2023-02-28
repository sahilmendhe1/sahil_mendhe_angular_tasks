const express = require('express');
const routing = express.Router();
const book = require('../service/bookdetails');


routing.get("/getBooks", (req, res) => {
    result = book.retrieveBooks();
    res.json(result);
});

routing.get('/getBooks/:bookname', (req, res) => {
    bname = req.params.bookname;
    console.log(bname);
    result = book.retrieveBookDetail(bname);
    if(result){
        res.json(result);
    }
    else{
    res.json("Details not found");
    }
});

routing.post("/Book", (req, res) => {
var BOOK = JSON.stringify(req.body);
result = book.addBookDetails(BOOK);
if(result){
    res.json("successfully book added");
}
else{
    res.json("failed to add book");
}
});


routing.post("/Books",(req, res) => {
    var BOOK = JSON.stringify(req.body);
    result = book.multipleAddBookDetails(BOOK);
    if(result){
    res.json("successfully books added");
    }
    else{
        res.json("failed to add books");
    }
});


routing.delete('/Book/:bookname', (req, res) => {
    bookname = req.params.bookname;
    key = req.params.key;
    value = req.params.value;
    result = book.deleteBookDetails(bookname, key, value);
    if(result){
    res.json("successfully book deleted");
    }
    else{
        res.json("failed to book deleted");
    }
});

routing.put("/Book/:bookname/:key/:value", (req, res) => {
    bookname = req.params.bookname;
    key = req.params.key;
    value = req.params.value;
    result = book.updateBookDetails(bookname, key, value);
    if (result) res.json("successfully updated the Book");
    else res.json("Error!!");
    console.log("sahil");
  });

// routing.put("/Book/:bookname/:key/:value", (req, res) => {
// bookname = req.params.bookname;
// key = req.params.key;
// value = req.params.value;
// result = book.updateBookDetails(bookname, key, value);
// if(result){
//     res.json("successfully updated the book");
// }
// else{
//     res.json("failed to updated the book");
// }
// });


module.exports = routing;
