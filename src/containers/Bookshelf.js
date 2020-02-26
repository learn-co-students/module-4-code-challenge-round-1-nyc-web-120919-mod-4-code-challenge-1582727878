import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.bookData.map(bookData => {
        return <Book
        bookData={bookData}
        key={bookData.id} 
        
        />
      
      })}

      
      </ul>
    </div>
  );
};

export default Bookshelf;