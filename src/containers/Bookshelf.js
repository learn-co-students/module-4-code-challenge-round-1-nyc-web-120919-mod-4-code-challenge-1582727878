import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // let displayedBooksOnShelf;
  // displayed  
  // let displayedBooksOnShelf = props.shelf.map(book => (<Book key={book.id} book={book} id={book.id}/> ))
  
  // console.log(props.shelf, 'heres the shelf')
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.shelf ? props.shelf.map(book => (<Book book={book} key={book.id} id={book.id} clickHandler={props.clickHandler}/> )) : null
}</ul>
    </div>
  );
};



export default Bookshelf;
