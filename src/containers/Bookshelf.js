import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{
      /*render list of books here*/
      props.bookshelf.map((bookObj) => {
        return (
          <Book 
          book={bookObj}
          key={bookObj.id}
          removeBook={props.removeBook}
          />
        )
      })
      
      
      
      
      }</ul>
    </div>
  );
};

export default Bookshelf;
