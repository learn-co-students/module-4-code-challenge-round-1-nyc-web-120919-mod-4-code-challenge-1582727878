import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
console.log(props, 'propss in bookshelf')
  const bookList = props.bookshelf.map(book =>
    <Book key={book.id} book={book} handleBookshelfClick={props.handleBookshelfClick}/>)

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookList}</ul>
    </div>
  );
};

export default Bookshelf;
