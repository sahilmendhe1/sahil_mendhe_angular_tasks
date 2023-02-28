books = [
  {
    name: "book1",
    author: "",
    Price: 500,
    pageNo: 600,
  },
  {
    name: "book2",
    author: "J.K",
    Price: 500,
    pageNo: 600,
  },
  {
    name: "book3",
    author: "J.K",
    Price: 500,
    pageNo: 600,
  }
];

bookDetails = {};

bookDetails.retrieveBooks = () => {
  return books;
};

bookDetails.retrieveBookDetail = (bname) => {
  for (let i = 0; i < books.length; i++) {
    if (books[i]["name"].toLowerCase() == bname.toLowerCase()) {
      return books[i];
    }
  }
}

  bookDetails.addBookDetails = (Book) => {
    if (Book) {
      let bookObj = JSON.parse(Book);
      books.push(bookObj);
      console.log(books);
      return true;
    } else {
      return false;
    }
  };

  bookDetails.multipleBookDetails = (Book) => {
    if(Book) {
        let bookObj = JSON.parse(Book);
        for(let i = 0; i < 10; i++) {
            books.push(bookObj);
            console.log(books);
        }        
        return true;
    } else {
        return false;
    }
  }

  bookDetails.deleteBookDetails = (bname) => {
    let index;
    if (bname) {
      for (let i = 0; i < books.length; i++) {
        if (books[i]["name"].toLowerCase() == bname.toLowerCase()) {
          index = i;
          break;
        }
      }
    }
    books.splice(index, 1);
    console.log(books);
    return true;
  };

  bookDetails.updateBookDetails = (bname, Book) => {
    if (bname) {
      for (let i = 0; i < books.length; i++) {
        if (books[i]["name"].toLowerCase() == bname.toLowerCase()) {
          books[key] = value;
          return true;
        }
      }
    } else {
      return false;
    }
  };

module.exports = bookDetails;
