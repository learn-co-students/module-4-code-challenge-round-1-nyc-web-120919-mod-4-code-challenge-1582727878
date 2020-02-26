import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.shelfBooks.map(book => <Book key={book.id} book={book} handleBook={props.handleBook} />
      )}</ul>
    </div>
  );
};

export default Bookshelf;
