import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.books.map(book => {
          return <Book key={book.id} book={book} clickHandler={props.removeFromShelf} isShelf={true}/>
        })}</ul>
    </div>
  );
};

export default Bookshelf;
