import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.books.map(book => <Book key={book.id} {...book} handleBookClick={props.handleBookShelfClick}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
