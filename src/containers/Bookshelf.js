import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <ul>{ props.bookShelf.map(book => <Book key={book.id} {...book} handleClick={props.removeFromBookShelf} />) }</ul>
    </div>
  );
};

export default Bookshelf;
